//form validation
//đối tượng 
function Validator(option) {
    // lấy form
    const formElement = document.querySelector(option.form);

    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(option.error);
        var errorMessage = rule.test(inputElement.value);
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("invalid");
        } else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove("invalid");
        }
    }


    if (formElement) {
        option.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                //xử lý khi blur
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }
                //xử lý khi nhập
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(option.error);
                    errorElement.innerText = "";
                    inputElement.parentElement.classList.remove("invalid");
                }
            }

        })
    }

}

// định nghĩa rules
//nguyên tắc của các rules:
//1. Khi có lỗi => message lỗi
//2.Khi không có lỗi => ko trả ra cái gì cả


// 
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Vui lòng nhập trường này"

        }

    }
}

//email
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value) ? undefined : "Email không đúng định dạng";

        }

    }
}

//pass
Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : "Password quá ngắn tối thiểu phải 6 kí tự"
        }
    }

}

