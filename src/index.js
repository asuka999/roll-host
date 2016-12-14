import riot from 'riot'
import './app.tag'

const PREFIX = 'zhihu-fe:'

const store = {
  _fers_: null,
  _history_: null,
  get fers () {
    if (!this._fers_) {
      this._fers_ = JSON.parse(localStorage.getItem(`${PREFIX}fers`))
    }
    return this._fers_
  },
  set fers(value) {
    this._fers_ = value
    localStorage.setItem(`${PREFIX}fers`, JSON.stringify(this._fers_)) 
  },
  get history() {
    if (!this._history_) {
      this._history_ = JSON.parse(localStorage.getItem(`${PREFIX}history`))
    }
    return this._fers_
  },
  set history(value) {
    this._history_ = value
    localStorage.setItem(`${PREFIX}histroy`, JSON.stringify(this._history_)) 
  }
}


function install() {
  localStorage.setItem('fers', 
    ['guang', 'imior' 'jzf', 't1ger', 'ljc', 'lijia', 'xdy', 'zhujie', 'wanghao', 'sunbeiji', 'pengjunjie', 'wys', 'zzw', 'zxin'].map(name => {name, prior: 1}))
}


function roll (max, min = 0) {
  return Math.round(Math.random() * max - min) + min 
}

riot.mount('app', store)
