$(document).ready(function () {
    const campoDePesquisa = $('.form-pesquisar__campo');    
    document.addEventListener('input', function() {
        if (campoDePesquisa.val() != '') {
            $('.form-pesquisar__botao').css("display", "block");
        } else if (campoDePesquisa.val() == '') {
            $('.form-pesquisar__botao').css("display", "none");
        }
    })

});
