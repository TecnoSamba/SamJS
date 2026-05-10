import './App.css'
import './hint.css'
import { useContext, useEffect, useRef, useState } from 'react'
import JsRunner from '/src/jsRunner.js?worker'
import { EditorView } from '@codemirror/view'
import { basicSetup } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { githubLightInit } from '@uiw/codemirror-theme-github'
import { Compartment, EditorState } from '@codemirror/state'
import { globalCompletions } from './autocomplations'
import { autocompletion } from '@codemirror/autocomplete'
import Auth from './components/Auth'
import Save from './components/Save'
import { libraryTooltip } from './components/libraryTooltip'
import { lightTheme, darkTheme } from './CONSTANTS'
import { driver } from "driver.js"
import "driver.js/dist/driver.css"
import Log from './components/Log'
import { ThemeContext } from './ThemeContext'

function App() {
  const githubLight = githubLightInit()
  let isShared = false

  const runner = useRef(null)
  const [code, setCode] = useState(localStorage.getItem('code') || 'console.log("Hello, world!")')
  const [log, setLog] = useState([])
  const { theme, setTheme } = useContext(ThemeContext)
  const [editorTheme, setEditorTheme] = useState(theme === 'dark' ? dracula : githubLight)
  const [stylesTheme] = useState(theme === 'dark' ? EditorView.theme(darkTheme) : EditorView.theme(lightTheme))
  const [copyToolTip, setCopyToolTip] = useState('Copy shareable link')
  const [packages, setPackages] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const editor = useRef(null)
  const editorDiv = useRef(null)
  const themeCompartment = useRef(new Compartment).current
  const stylesCompartment = useRef(new Compartment).current
  const isSharedRef = useRef(isShared)
  const [hasTakenTour] = useState(localStorage.getItem('hasTakenTour') == 'true' || false)
  const [isSharedCodeSaved, setIsSharedCodeSaved] = useState(true)

  const mainPageDriver = driver({
    showProgress: true,
    showButtons: true,
    popoverClass: 'tour-dialog',
    steps: [
      { element: '#root', popover: { title: '👋 Welcome to SamJS!', description: "SamJS is a Open Source web app to test JavaScript code in a utility-full environment. But before you start to code, let's take a look at the interface!" } },
      { element: '#editor', popover: { title: '✏️ The editor', description: "This is the editor, write your code here to run it. It is fully charged with features as syntax highlighting, contextual autocomplete and much more!" } },
      { element: '#log', popover: { title: '📋 The log area', description: "In the log area you can visualize the errors of your program, as well as any log that it could generate. SamJS supports all kinds of `console.` methods (log, info, warn, error and clear)." } },
      { element: '#theme', popover: { title: '🌙 The theme picker', description: "Click this button to change between dark and light themes. By default, and for not burning your eyes 🤣, the dark theme is selected." } },
      { element: '#share', popover: { title: '📨 The share button', description: "Clicking this button will automatically copy to your clipboard a sharable SamJS link. Feel free to send it to your friends to presume of your code!" } },
      { element: '#packageSearch', popover: { title: '📦 The package search', description: "Open a dialog in which you can search any npm package and instantly import it to the editor." } },
      { element: 'button[component="SignInButton"]', popover: { title: '🔑 The log in button', description: "Either login or create an account to access to your code snippets or create new ones." } },
      { element: '#codeSnippets', popover: { title: '💾 Code Snippets', description: "A code snippet is a saved and private portion of code that can be saved to your SamJS account to use anywhere you want as long as you are logged in. Here you can manage and create your code snippets." } },
    ],
    onDestroyed: () => window.location.reload()
  })

  if (!hasTakenTour) {
    mainPageDriver.drive()

    localStorage.setItem('hasTakenTour', 'true')
  }


  useEffect(() => {
    runner.current = new JsRunner()
    const messageHandler = e => {
      if (e.data.type === 'clear') {
        setLog([])
      }
      if (e.data.type === 'log') {
        if (!isNaN(e.data.content)) {
          setLog(log => [...log, <br />, <Log type='number' code={editor.current.state.doc.toString()} content={e.data.content} />])
        } else {
          setLog(log => [...log, <br />, <Log type='log' code={editor.current.state.doc.toString()} content={e.data.content.split('')[0] === '{' ? e.data.content : `'${e.data.content}'`} />])
        }
      }
      if (e.data.type === 'error') {
        setLog(log => [...log, <br />, <Log type='error' code={editor.current.state.doc.toString()} content={`❌ ${e.data.content}`} />])
      }
      if (e.data.type === 'warning') {
        setLog(log => [...log, <br />, <Log type='warn' code={editor.current.state.doc.toString()} content={`⚠️ ${e.data.content}`} />])
      }
      if (e.data.type === 'info') {
        setLog(log => [...log, <br />, <Log type='info' code={editor.current.state.doc.toString()} content={`ℹ️ ${e.data.content}`} />])
      }
    }
    runner.current.onmessage = e => messageHandler(e)
    return () => runner.current.terminate()
  }, [])

  useEffect(() => {

    if (editor.current || !editorDiv.current) return

    if (editor.current) {
      editor.current.destroy()
    }

    const updateListener = EditorView.updateListener.of(update => {
      if (update.docChanged) {
        setLog([])
        const currentCode = update.state.doc.toString()
        setCode(currentCode)
        if (!isSharedRef.current) {
          localStorage.setItem('code', currentCode)
        } else {
          setIsSharedCodeSaved(false)
        }
        runner.current.postMessage(currentCode)
      }
    })

    editor.current = new EditorView({
      state: EditorState.create({
        doc: code,
        extensions: [basicSetup, libraryTooltip, javascript(), themeCompartment.of(editorTheme), stylesCompartment.of(stylesTheme), updateListener, autocompletion({ override: [globalCompletions] })],
      }),
      parent: editorDiv.current
    })
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const encoded = params.get('c')

    if (encoded) {
      isSharedRef.current = true
      const decoded = decodeURIComponent(atob(encoded))
      editor.current?.dispatch({
        changes: { from: 0, to: editor.current.state.doc.length, insert: decoded }
      })
      window.history.replaceState(null, '', window.location.origin + window.location.pathname)
    }
  }, [])

  useEffect(() => {
    if (!isSharedRef.current) runner.current.postMessage(code)
  }, [])

  const changeTheme = () => {

    let newTheme
    let newStyles

    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      newTheme = githubLight
      newStyles = EditorView.theme(lightTheme)
    }
    else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      newTheme = dracula
      newStyles = EditorView.theme(darkTheme)
    }

    setEditorTheme(newTheme)

    editor.current.dispatch({
      effects: [themeCompartment.reconfigure(newTheme), stylesCompartment.reconfigure(newStyles)]
    })
  }

  const copyShareableLink = () => {
    const EncryptedUrl = btoa(encodeURIComponent(editor.current.state.doc.toString()))
    const url = `${window.location.origin}?c=${EncryptedUrl}`

    navigator.clipboard.writeText(url)
      .then(() => {
        setCopyToolTip('Copied!')
        setTimeout(() => setCopyToolTip('Copy shareable link'), 1000)
      })
  }

  const searchPackage = async e => {
    if (e.key === 'Enter' && e.target.value) {
      setPackages([])
      fetch(`https://api.npms.io/v2/search?q=${e.target.value}`)
        .then(res => res.json())
        .then(response => {
          Array.from(response.results).forEach(packageData => {
            setPackages(packages => [...packages, <section onClick={() => {
              editor.current.dispatch({
                changes: {
                  from: 0,
                  insert: `const ${packageData.package.name.replace(/[-/@.]/g, '_')} = await require('https://esm.sh/${packageData.package.name}@latest')\n\n`
                }
              })
              setDialogOpen(false)
            }}><span>{packageData.package.name}</span><span>{packageData.package.publisher.username}</span></section>])
          })
        })
    }
  }



  return (
    <>
      <header style={theme === 'dark' ? { backgroundColor: '#09090b', borderBottom: '1.5px solid #8e8e8e' } : { backgroundColor: 'white', borderBottom: '1.5px solid black', color: 'black' }}>
        <h1 style={{ color: '#38b6ff' }}>Sam<span style={{ color: 'yellow' }}>JS</span></h1>
        <div className="buttons">
          <Save theme={theme} code={code} editor={editor} />
          <button id='packageSearch' className='hint--bottom-left hint--bounce hint--rounded tool-button button' aria-label='Search packages' onClick={() => dialogOpen ? setDialogOpen(false) : setDialogOpen(true)} style={theme === 'dark' ? { color: 'white' } : { color: 'black' }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="CURRENTCOLOR"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" /></svg></button>
          <button id='share' className='hint--bottom-left hint--bounce hint--rounded tool-button button' aria-label={copyToolTip} disabled={code === ''} onClick={copyShareableLink} style={theme === 'dark' ? { color: 'white' } : { color: 'black' }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="CURRENTCOLOR"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" /></svg></button>
          <button id='theme' className='hint--bottom-left hint--bounce hint--rounded button' aria-label='Switch theme' onClick={changeTheme}>{theme === 'dark' ? '🌙' : '☀️'}</button>
          <Auth />
        </div>
      </header>
      <main style={theme === 'dark' ? { backgroundColor: '#09090b' } : { backgroundColor: 'white' }}>
        <div id='editor' ref={editorDiv} style={theme === 'dark' ? { '--border': '#8e8e8e' } : { '--border': 'black' }}>
        </div>
        <div id='log' style={theme === 'dark' ? { backgroundColor: '#09090b' } : { backgroundColor: 'white' }}>
          {log}
          <button 
          className={`saveButton ${!isSharedCodeSaved ? 'appear' : 'hide'}`}
          onClick={() => {
            localStorage.setItem('code', code)
            setIsSharedCodeSaved(true)
          }}
          >
            <div><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentcolor"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM565-275q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" /></svg></div>
            <span>Save shared code</span>
          </button>
        </div>
      </main>
      <dialog open={dialogOpen} style={theme === 'dark' ? { '--background': '#09090b', '--color': 'white', '--border': '#151517' } : { '--background': 'white', '--color': 'black', '--border': 'black' }} className='ui-dialog'>
        <h1>Search a package 📦</h1>
        <input type="text" onKeyDown={searchPackage} placeholder='Package...' style={theme === 'dark' ? { '--background': '#09090b', '--border': '#a1a1a5' } : { '--background': 'white', '--border': '#b8b8bf' }} />
        <div className="packages">
          {packages}
        </div>
        <button onClick={() => setDialogOpen(false)} style={theme === 'dark' ? { color: 'white' } : { color: 'black' }} className='close'>×</button>
      </dialog>
    </>
  )
}


export default App
