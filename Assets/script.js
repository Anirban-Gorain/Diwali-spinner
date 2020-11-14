const _button = document.querySelector(".button");
const _rotator = document.querySelector("._rotator");
let _interval_Handel;
let _rotation_Value;
let _increment_Value;
let _can_Click = true;

_button.addEventListener("click", () => {
    
    if(_can_Click === true)
    {

        _can_Click = false;

        _increment_Value = 5;
        _rotation_Value = 0;

        _interval_Handel = setInterval(() =>
        {
            
            if (_rotation_Value >= 360)
            {

                _rotation_Value = 0;
                _increment_Value -= 0.2;

                if (_increment_Value <= 0)
                {

                    _can_Click = true;

                    // Winner setting

                    _rotation_Value = Math.random() * (288 - 0) + 288;
                    
                    clearInterval(_interval_Handel);
                    console.log(_rotation_Value);
                    
                }
                
            }
            
            _rotation_Value += _increment_Value;
            
            _rotator.style.transform = `rotate(${_rotation_Value}deg)`;

        }, 5);
        
    }

});