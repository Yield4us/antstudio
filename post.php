<?
$err=0;
if (strlen(trim($name))==0) $err=1;
if (strlen(trim($email))==0) $err=1;
if (strlen(trim($text))==0) $err=1;
if ($err==1){
echo "Ошибка! Заполнены не все поля формы!";
} else {
mail("email@domen.ru", "Тема письма", "$text", "From: $name <$email>");
?>
Заявка успешно отправлена.
<?
}
?>