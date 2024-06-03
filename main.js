$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const nomeDaTarefa = $("#nome-tarefa").val();
    const novoItensNaLista = $(`<li>${nomeDaTarefa}</li>`);
    $(novoItensNaLista).appendTo("ul");
    $(novoItensNaLista).fadeIn(1000);
    $(novoItensNaLista).click(function () {
      $(this).addClass("risco");
    });
    $("#nome-tarefa").val("");
  });
});
