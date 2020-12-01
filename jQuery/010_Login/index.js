let utenti = [{"user": "pippo", "pwd": "pwdPippo1"},
    {"user": "pluto", "pwd": "pwdPluto1"},
    {"user": "minnie", "pwd": "pwdMinnie1"}]


$(document).ready(function () {
    let _txtUser = $("#txtUser")
    let _txtPwd = $("#txtPwd")
    let _msgUser = $("#msgUser")
    let _msgPwd = $("#msgPwd")

    // Hover txt
    _txtUser.hover(
        function () {
            _txtUser.css({"background-color": "#CCF", "border-color": "blue"})
        },
        function () {
            _txtUser.css({"background-color": "", "border-color": ""})
        }
    )
    _txtPwd.hover(
        function () {
            _txtPwd.css({"background-color": "#ccccff", "border-color": "blue"})
        },
        function () {
            _txtPwd.css({"background-color": "", "border-color": ""})
        }
    )

    // txtUser
    _txtUser.change(function () {
        let bool = true

        if (!_txtUser.val() == "") {
            for (const item of utenti) {
                if (item.user == _txtUser.val()) {
                    txtOk(_txtUser, _msgUser, "OK")
                    break
                } else if (item.user == utenti[utenti.length - 1].user) {
                    bool = false
                    txtNOK(_txtUser, _msgUser, "User non valido")
                }
            }
        } else {
            txtNOK(_txtUser, _msgUser, "User non valido")
        }
    })

    // OK or NOK
    function txtOk(_txt, _msg, text) {
        _txt.removeClass("nok")
        _txt.addClass("ok")
        _msg.text(text)
        _msg.hide().fadeIn(2000)
        _msg.css("color", "green")
    }
    function txtNOK(_txt, _msg, text) {
        _txt.addClass("nok")
        _msg.text(text)
        _msg.hide().fadeIn(2000)
        _msg.css("color", "red")
    }

    // txtPwd
    _txtPwd.change(function () {
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(_txtPwd.val())) {
            for (const item of utenti) {
                if (item.pwd == _txtPwd.val() && item.user == _txtUser.val()) {
                    txtOk(_txtPwd, _msgPwd, "OK")
                    break
                } else if (item.user == utenti[utenti.length - 1].user) {
                    txtNOK(_txtPwd, _msgPwd, "pwd ndddddddon valida")
                }
            }
        } else {
            txtNOK(_txtPwd, _msgPwd, "pwd non valida")
        }
    })
})

