export default class $G {

    /**
     * @private
     */
    _doc_;

    /**
     * @param {keyof HTMLElementTagNameMap} _Query_ 
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
            .replace(',', ";")
            .replace("}", ';')
            .replace(',', ";")
            .replace(/"/g, '')
            .replace(',', ";")
            .replace(/'/g, '')
            .replace(',', ";")

        this._doc_.style = sty;
        return this
    }

    /**
   * @typedef {Object} props
   * @property {keyof HTMLElementTagNameMap} Tag
   * @property {string} content
   */

    /**
     * @param {keyof HTMLElementTagNameMap} where
     * 
     * @param {props} _props 
     * @param {($s:$G) => void} self 
     */
    createBox(where, _props, self) {
        let newChild = document.createElement(_props.Tag)
        newChild.innerHTML = _props.content
        let _doc1_ = document.querySelector(where)
        _doc1_.appendChild(newChild);
        self(new $G(newChild.tagName))
        return this
    }


    /**
     * @param {($n:$G) => void} fun
     * @param {typeof HTMLElementTagNameMap} where 
     */
    $next(where, fun) {
        fun(new $G(where))
        return this
    }
}