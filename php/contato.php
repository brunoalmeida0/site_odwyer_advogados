<?php;
   if($_SERVER["REQUEST_METHOD"] == "POST"){
      $nome = $_POST["nome"];
      $email = $_POST["email"];
      $assunto = $_POST["assunto"];
      $mensagem = $_POST["mensagem"];
   }


	$assunto2 = "Formulário de contato: ".$assunto;

	$mensagem1 = "
		<html>
			<head>
				<title>Formulário de contato</title>
			</head>
			<body>
				<p><b>Nome: </b>".$nome."</p><br>
				<p><b>Mensagem: </b>".$mensagem."</p>
			</body>
		</html>
	";

   $to = "emaildocliente@email.com.br"; //
   $headers = "Content-Type: text/html; charset=UTF-8;"."\r\n"."From:".$email;
   @mail($to, '=?utf-8?B?'.base64_encode($assunto2).'?=', $mensagem1, $headers);

   $headers2 = "Content-Type: text/html; charset=UTF-8;"."\r\n"."From:".$to;
   $a_resposta = "NomeDoCliente"; //
   $resposta = "
   <html>
   <head>
    <title> </title>
   </head>
   <body>
   <p>Olá ".$nome.",<br><br>Sua mensagem foi recebida!<br>Em breve entraremos em contato!<br><br>Obrigado!</p>
   </body>
   </html>";
   @mail($email, $a_resposta, $resposta, $headers2);


   echo ("<SCRIPT LANGUAGE='JavaScript'>
    window.alert('Sua mensagem foi enviada com sucesso.');
    window.location.href='../index.html';
    </SCRIPT>");

?>
