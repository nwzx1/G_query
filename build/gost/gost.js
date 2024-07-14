class $s {

    _nme_str = ''
    _doc_;

    constructor(name_ = '') {
        this._nme_str = name_
        this._doc_ = document.querySelector(this._nme_str)
    }

    click(func = (e) => { }) {
        if (this._doc_ != null) {
            this._doc_.addEventListener('click', (e) => {
                func(e)
            })
        }
        return this
    }
}

export default $s