export default class $G {

    _doc_;

    /**
     * @param {string} _Query_ 
     */
    constructor(_Query_) {
        this._doc_ = document.querySelector(_Query_)
    }

    /** 
    * @param {keyof DocumentEventMap} events
    * @param {(e: DocumentEventMap[events]) => void} func
    */
    addEvent(events, func) {
        this._doc_.addEventListener(events, (e) => func(e))
        return this
    }

    /**
     * @param {Object.<string, string>} s  
     */
    setStyle(s) {
        /**
         * @type {Object.<string,string>} style
         */
        let style = {}
        for (let i = 0; i < Object.keys(s).length; i++) {
            style[Object.keys(s)[i]] = s[Object.keys(s)[i]]
        }

        const sty = JSON.stringify(style)
            .replace(',', ";")
            .replace('{', "")
            .replace("}", ';')
            .replace(/"/g, '')

        this._doc_.style = sty
    }
}