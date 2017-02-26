//SIGAA Login (Microsoft Edge)
function main()
{
    // Função principal que será carregada no login do SIGAA (especificamente da Universidade Federal do Ceará)
    var login_do_usuario = document.getElementsByName("user.login");
    var senha_do_usuario = document.getElementsByName("user.senha");
    var botao_de_login = document.getElementsByName("entrar");

    // Altera as propriedades dos elementos
    login_do_usuario[0].disabled = false;
    senha_do_usuario[0].disabled = false;
    botao_de_login[0].disabled = false;
}

main();