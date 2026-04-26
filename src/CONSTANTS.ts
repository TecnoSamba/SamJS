import { commonStyles } from './commonStyles'

export const darkTheme = {
    '&': {
        height: '100%',
        width: '100%',
    },
    ".cm-line": {
        color: '#44b81d'
    },
    '.cm-gutters': {
        'display': 'none'
    },
    '.cm-content': {
        'background-color': '#09090b',
        'font-family': 'Fira Code',
        'padding': '9px',
    },
    '.cm-selectionBackground': {
        color: 'white'
    },
    '.cm-content ::selection': {
        color: 'white'
    },
    '.cm-button': {
        'border': '0',
        'margin': '5px',
        'width': 'fit-content',
        'height': 'fit-content',
        'padding': '5px',
        'border-radius': '4px',
        'background-color': '#09090b',
        'background-image': 'none',
        'font-family': 'Fira Code'
    },
    '.cm-search': {
        'font-family': 'Fira Code'
    },
    '.cm-textfield': {
        'border-radius': '4px',
        'font-family': 'Fira Code'
    },
    '.cm-tooltip-below': {
        border: '1px solid #8e8e8e'
    },
    '.cm-tooltip-hover': {
        'background-color': '#09090b',
        padding: '5px',
        'font-family': 'Fira Code',
        width: 'auto',
        height: '200px',
        'overflow': 'auto',
        'scrollbar-width': 'none',
        'border-radius': '9px',
    },
    ...commonStyles
}

export const lightTheme = {
    '&': {
        height: '100%',
        width: '100%'
    },
    '.cm-gutters': {
        'display': 'none'
    },
    '.cm-content': {
        'background-color': 'white',
        'font-family': 'Fira Code',
        'padding': '9px'
    },
    '::selection': {
        'color': 'hotpink'
    },
    '.cm-button': {
        'margin': '5px',
        'width': 'fit-content',
        'height': 'fit-content',
        'padding': '5px',
        'border-radius': '4px',
        'background-color': 'white',
        'border': '1.5px solid black',
        'background-image': 'none',
        'font-family': 'Fira Code'
    },
    '.cm-search': {
        'font-family': 'Fira Code'
    },
    '.cm-textfield': {
        'border-radius': '4px',
        'font-family': 'Fira Code'
    },
    '.cm-tooltip': {
        'border-radius': '4px'
    },
    '.cm-tooltip-hover': {
        'background-color': 'white',
        padding: '5px',
        'font-family': 'Fira Code',
        width: 'auto',
        height: '200px',
        'overflow': 'auto',
        'scrollbar-width': 'none',
        'border-radius': '9px',
    },
    ...commonStyles
}