$(document).ready(function() {
    Case = function() {
        _cthis = this;
    };
    Case.prototype = {
        _init: function() {
            _cthis._op();
            _cthis._removeYd();
        },

        _op: function() {
            // $("#h_date").datetimepicker({
            //     format: "yyyy-mm-dd",
            //     language: 'zh-CN',
            //     weekStart: 1,
            //     todayBtn: 1,
            //     autoclose: 1,
            //     todayHighlight: 1,
            //     startView: 2,
            //     minView: 2,
            //     forceParse: 0
            // });

            $(".h_ex input").click(function() {
                // alert($(this).val());
                if ($(this).is(':checked') == true) {
                    _cthis._addKey($(this));
                } else {
                    _cthis._removeKey($(this));
                }
                // _cthis._addKey($(this));
            });

            // 查找相关操作要点
            $(".h_find").click(function() {
                $(".h_table").show();
                _cthis._showDetail();
            });


            $(".h_addyd").click(function() {
                var str = "<div class='input-group new_yd'><input type='text' class='form-control input-sm'><div class='input-group-addon'><span class='glyphicon glyphicon-remove'></span></div></div>";
                $(".new_td_list").prepend(str);
                _cthis._removeYd();
            });
        },

        _removeYd: function() {
            $(".new_yd .input-group-addon").click(function() {
                var _pa = $(this).parent('.new_yd');
                var _paIndex = _pa.parent('.new_td_list').children('.new_yd').length;
                if (_paIndex <= 4) {
                    _pa.children('.form-control').val('');
                } else {
                    _pa.remove();
                }
            });
        },

        _showDetail: function() {
            $(".h_table tbody").html('');
            var data = {

            };
            $.ajax({
                url: '',
                dataType: 'JSON',
                data: data,
                type: 'POST',
                success: function(back) {
                    var show = {
                        list: []
                    };

                    // var template = $("#ydlist").html();
                    // Mustache.parse(template);
                    // var rendered = Mustache.render(template, show);
                    _cthis._detailOp();
                }
            });
            $(".h_table").show();
        },



        _addKey: function(ele) {
            var nowKey = ele.val();
            if (_cthis._checkKey(nowKey)) {
                var hstr = $("#h_gjc").val();
                var ahstr;
                if (hstr == "") {
                    ahstr = nowKey;
                } else {
                    ahstr = "，" + nowKey;
                }
                var newhstr = hstr + ahstr;
                $("#h_gjc").val(newhstr);
            }
        },

        _removeKey: function(ele) {
            var nowKey = ele.val();
            if (!_cthis._checkKey(nowKey)) {
                var hstr = $("#h_gjc").val();
                var hstr_array = hstr.split(/[,，]/);
                var newstr = "";
                var t = 0;
                for (var i = 0; i < hstr_array.length; i++) {
                    if (hstr_array[i] != nowKey) {
                        if (t == 0) {
                            newstr += hstr_array[i];
                        } else {
                            newstr += "，" + hstr_array[i];
                        }
                        t++;
                    }
                }
                $("#h_gjc").val(newstr);
            }
        },

        _checkKey: function(str) {
            var hstr = $("#h_gjc").val();
            var hstr_array = [];
            hstr_array = hstr.split(/[,，]/);
            for (var i = 0; i < hstr_array.length; i++) {
                if (hstr_array[i] === str) {
                    return false;
                }
            }
            return true;
        },
    };
    var newCase = new Case();
    newCase._init();
});