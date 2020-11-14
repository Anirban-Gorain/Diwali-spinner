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

                    // Winner setting
                    
                    clearInterval(_interval_Handel);
                    let _winner_Point = Math.random() * (720 - 0 + 1) + 0;
                    let _stop_Point = 0;


                    let _first_Bracket_Index;
                    let _second_Bracket_Index;
                    let _extracting_The_Rotation_Value;
                    
                    let _winner_Interval_handle = setInterval(() =>
                    {

                        _first_Bracket_Index = _rotator.style.transform.split("").indexOf('(');
                        _second_Bracket_Index = _rotator.style.transform.split("").indexOf(')')
                        _extracting_The_Rotation_Value = parseFloat(_rotator.style.transform.substr(_first_Bracket_Index+1, _second_Bracket_Index-1));

                        if(_stop_Point >= _winner_Point)
                        {

                            _can_Click = true;
                            clearInterval(_winner_Interval_handle);
                            return 0;
                            
                        }

                        _rotator.style.transform = `rotate(${_extracting_The_Rotation_Value + 0.2}deg)`;
                        _stop_Point += 0.5;
                        
                    }, 5);

                    return 0;
                    
                }
                
            }
            
            _rotation_Value += _increment_Value;
            
            _rotator.style.transform = `rotate(${_rotation_Value}deg)`;            
            
        }, 5);
        
    }

});