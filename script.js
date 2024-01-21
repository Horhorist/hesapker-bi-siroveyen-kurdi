// Hêmana HTML-ê ya ku qutiya têketina hesabkerê temsîl dike hilbijêrin
let input = document.getElementById('inputBox');

// Hemî hêmanên 'button' hilbijêrin û wan wekî NodeList bistînin
let buttons = document.querySelectorAll('button');

// Guherbara ku nirxa têketinê ya ku dê hesabê wê were kirin digire
let string = "";

// NodeList veguherînin array-ek rastîn
let arr = Array.from(buttons);

// Ji bo her girêkek dorpêkek dest pê bike
arr.forEach(button => {
    // Guhdêrê bûyerê bikirtînin li her nodê
    button.addEventListener('click', (e) => {
        // Ger naveroka girêka ku hatiye tikandin '=' be, rêzika têketinê binirxînin û encamê li qutiya têketinê binivîsin.
        if (e.target.innerHTML == '=') {
            // Bi fonksiyona evalê ya JavaScriptê rêzika têketinê hesab bike
            string = eval(string);
            // Encamê di qutiya têketinê de binivîsin
            input.value = string;
        }
        // Ger naveroka girêka klîk 'AC' be, rêzika têketinê paqij bike û qutiya têketinê vala bike.
        else if (e.target.innerHTML == 'AC') {
            //Hêla têketinê vegerîne
            string = "";
            // Qutiya têketinê vala bikin
            input.value = string;
        }
        // Ger naveroka girêka ku hatiye tikandin 'DEL' be, karaktera dawî ya rêzika têketinê jêbibe û qutiya têketinê nûve bike.
        else if (e.target.innerHTML == 'DEL') {
            // Karaktera paşîn a rêzika têketinê jê bibe
            string = string.substring(0, string.length - 1);
            // Qutiya têketinê nûve bike
            input.value = string;
        }
        // Ger yek ji haletên jorîn li hev nebin, naveroka girêka klîkkirî li rêzika têketinê zêde bikin û qutiya têketinê nûve bikin.
        else {
            // Naveroka girêka klîkkirî li rêzika têketinê zêde bike
            string += e.target.innerHTML;
            // Qutiya têketinê nûve bike
            input.value = string;
        }
    });
});
