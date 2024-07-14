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
   * @property {string} [innnerContent]
   * @property {string|string[]} [class]
   * @property {string} [id]
   */

    /**
     * @param {keyof HTMLElementTagNameMap} where - set where or which Document you want to target
     * 
     * @param {props} _props 
     * @param {($s:$G) => void} self calback function which provid instence of self
     */
    createBox(where, _props, self) {
        let newChild = document.createElement(_props.Tag)
        // create start
        typeof _props.innnerContent !== 'undefined' ? newChild.innerHTML = _props.innnerContent : {};
        typeof _props.innnerContent !== 'undefined' ? newChild.className = _props.class : {};
        typeof _props.innnerContent !== 'undefined' ? newChild.id = _props.id : newChild;
        // end create
        let _doc1_ = document.querySelector(where)
        _doc1_.appendChild(newChild);
        self(new $G(newChild.tagName))
        return this
    }


    /**
     * @param {($n:$G) => void} fun - calback function which provid instence of given where Document
     * @param {typeof HTMLElementTagNameMap} where - set where or which Document you want to target
     */
    $next(where, fun) {
        fun(new $G(where))
        return this
    }

    

}