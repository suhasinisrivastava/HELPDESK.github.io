<?php 
    if(isset($_POST['submit']))
    {
        $name = $_POST['name'];
        $mailFrom = $_POST['mail'];
        $subject = $_POST['subject'];
        $Msg = $_POST['message'];
        $to = "saipriya.rajagopal2020@vitstudent.ac.in";
        if(mail($mailTo,$subject,$message,$mailFrom))
        {
               header("location:index.php?success");
        }
    }
?>