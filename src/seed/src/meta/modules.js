
(function(config,Features,UA){
config({
    anim: {
        alias: ['anim/facade']
    }
});/*Generated by KISSY Module Compiler*/
config({
'anim/base': {requires: ['dom','event/custom']}
});
/*Generated by KISSY Module Compiler*/
config({
'anim/facade': {requires: ['dom','anim/base','anim/timer',KISSY.Features.isTransitionSupported() ? "anim/transition" : ""]}
});
/*Generated by KISSY Module Compiler*/
config({
'anim/timer': {requires: ['dom','event','anim/base']}
});
/*Generated by KISSY Module Compiler*/
config({
'anim/transition': {requires: ['dom','event','anim/base']}
});
/*Generated by KISSY Module Compiler*/
config({
'base': {requires: ['event/custom']}
});
/*Generated by KISSY Module Compiler*/
config({
'button': {requires: ['component/base','event']}
});
/*Generated by KISSY Module Compiler*/
config({
'calendar': {requires: ['node','event']}
});
/*Generated by KISSY Module Compiler*/
config({
'color': {requires: ['base']}
});
/*Generated by KISSY Module Compiler*/
config({
'combobox': {requires: ['dom','component/base','node','menu','io']}
});
/*Generated by KISSY Module Compiler*/
config({
'component/base': {requires: ['rich-base','node','xtemplate','event']}
});
/*Generated by KISSY Module Compiler*/
config({
'component/extension': {requires: ['event','component/base','dom','node']}
});
/*Generated by KISSY Module Compiler*/
config({
'component/plugin/drag': {requires: ['rich-base','dd/base']}
});
/*Generated by KISSY Module Compiler*/
config({
'component/plugin/resize': {requires: ['resizable']}
});
config({
    'dd': {alias: ['dd/base', 'dd/droppable']}
});
/*Generated by KISSY Module Compiler*/
config({
'dd/base': {requires: ['dom','node','event','rich-base','base']}
});
/*Generated by KISSY Module Compiler*/
config({
'dd/droppable': {requires: ['dd/base','dom','node','rich-base']}
});
/*Generated by KISSY Module Compiler*/
config({
'dd/plugin/constrain': {requires: ['base','node']}
});
/*Generated by KISSY Module Compiler*/
config({
'dd/plugin/proxy': {requires: ['node','base','dd/base']}
});
/*Generated by KISSY Module Compiler*/
config({
'dd/plugin/scroll': {requires: ['dd/base','base','node','dom']}
});
config({
    "dom/basic": {
        "alias": [
            'dom/base',
            Features.isIELessThan(9) ? 'dom/ie' : '',
            Features.isClassListSupported() ? '' : 'dom/class-list'
        ]
    },
    "dom": {
        "alias": [
            'dom/basic',
            !Features.isQuerySelectorSupported() ? 'dom/selector' : ''
        ]
    }
});/*Generated by KISSY Module Compiler*/
config({
'dom/class-list': {requires: ['dom/base']}
});
/*Generated by KISSY Module Compiler*/
config({
'dom/ie': {requires: ['dom/base']}
});
/*Generated by KISSY Module Compiler*/
config({
'dom/selector': {requires: ['dom/basic']}
});
config({
    'editor': {alias: ['editor/core']}
});
/*Generated by KISSY Module Compiler*/
config({
'editor/core': {requires: ['htmlparser','component/base','core']}
});
config({
    "event": {
        "alias": ["event/base", "event/dom", "event/custom"]
    }
});/*Generated by KISSY Module Compiler*/
config({
'event/custom': {requires: ['event/base']}
});
config({
    "event/dom": {
        "alias": [
            "event/dom/base",
            Features.isTouchSupported() ? 'event/dom/touch' : '',
            Features.isDeviceMotionSupported() ? 'event/dom/shake' : '',
            Features.isHashChangeSupported() ? '' : 'event/dom/hashchange',
            Features.isIELessThan(9) ? 'event/dom/ie' : '',
            UA.ie ? '' : 'event/dom/focusin'
        ]
    }
});/*Generated by KISSY Module Compiler*/
config({
'event/dom/base': {requires: ['dom','event/base']}
});
/*Generated by KISSY Module Compiler*/
config({
'event/dom/focusin': {requires: ['event/dom/base']}
});
/*Generated by KISSY Module Compiler*/
config({
'event/dom/hashchange': {requires: ['event/dom/base','dom']}
});
/*Generated by KISSY Module Compiler*/
config({
'event/dom/ie': {requires: ['event/dom/base','dom']}
});
/*Generated by KISSY Module Compiler*/
config({
'event/dom/shake': {requires: ['event/dom/base']}
});
/*Generated by KISSY Module Compiler*/
config({
'event/dom/touch': {requires: ['event/dom/base','dom']}
});
/*Generated by KISSY Module Compiler*/
config({
'imagezoom': {requires: ['node','overlay']}
});
config({
'ajax': {alias: ['io']}
});
/*Generated by KISSY Module Compiler*/
config({
'io': {requires: ['dom','event','json']}
});
/*Generated by KISSY Module Compiler*/
config({
'kison': {requires: ['base']}
});
/*Generated by KISSY Module Compiler*/
config({
'menu': {requires: ['component/extension','node','component/base','event']}
});
/*Generated by KISSY Module Compiler*/
config({
'menubutton': {requires: ['node','menu','button','component/extension']}
});
/*Generated by KISSY Module Compiler*/
config({
'mvc': {requires: ['event','base','io','json','node']}
});
/*Generated by KISSY Module Compiler*/
config({
'node': {requires: ['dom','event/dom','anim']}
});
/*Generated by KISSY Module Compiler*/
config({
'overlay': {requires: ['component/base','component/extension','node','xtemplate','event']}
});
/*Generated by KISSY Module Compiler*/
config({
'resizable': {requires: ['node','rich-base','dd/base']}
});
/*Generated by KISSY Module Compiler*/
config({
'rich-base': {requires: ['base']}
});
config({
    "scrollview": {
        "alias": [Features.isTouchSupported() ? 'scrollview/drag' : 'scrollview/base']
    }
});/*Generated by KISSY Module Compiler*/
config({
'scrollview/base': {requires: ['component/base','component/extension','dom','event']}
});
/*Generated by KISSY Module Compiler*/
config({
'scrollview/drag': {requires: ['scrollview/base','dd/base','event']}
});
/*Generated by KISSY Module Compiler*/
config({
'scrollview/plugin/scrollbar': {requires: ['component/base','event','dd/base','base']}
});
/*Generated by KISSY Module Compiler*/
config({
'separator': {requires: ['component/base']}
});
/*Generated by KISSY Module Compiler*/
config({
'split-button': {requires: ['component/base','button','menubutton']}
});
/*Generated by KISSY Module Compiler*/
config({
'stylesheet': {requires: ['dom']}
});
/*Generated by KISSY Module Compiler*/
config({
'swf': {requires: ['dom','json','base']}
});
/*Generated by KISSY Module Compiler*/
config({
'tabs': {requires: ['button','toolbar','component/base','component/extension']}
});
/*Generated by KISSY Module Compiler*/
config({
'toolbar': {requires: ['component/base','component/extension','node']}
});
/*Generated by KISSY Module Compiler*/
config({
'tree': {requires: ['node','component/base','component/extension','event']}
});
/*Generated by KISSY Module Compiler*/
config({
'waterfall': {requires: ['node','base']}
});
config({
    xtemplate: {
        alias: ['xtemplate/facade']
    }
});/*Generated by KISSY Module Compiler*/
config({
'xtemplate/compiler': {requires: ['xtemplate/runtime']}
});
/*Generated by KISSY Module Compiler*/
config({
'xtemplate/facade': {requires: ['xtemplate/runtime','xtemplate/compiler']}
});

                })(function(c){
                KISSY.config('modules', c);
                },KISSY.Features,KISSY.UA);
            