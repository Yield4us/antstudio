<?
if (isset ($_POST['messageFF'])) {
  mail ("ayan_9999@mail.ru",
        "заполнена контактная форма с ".$_SERVER['HTTP_REFERER'],
        "Имя: ".$_POST['nameFF']."\nEmail: ".$_POST['contactFF']."\nКонтактный телефон: ".$_POST['phone']."\nСообщение: ".$_POST['messageFF']);
  echo ('<p style="color: green">Ваше сообщение получено, спасибо!</p>');
  $_POST['nameFF'] = $_POST['contactFF'] = $_POST['phone'] = $_POST['messageFF'] = '';
}
?>