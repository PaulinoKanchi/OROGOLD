<?php 

	require_once "../model/conexion.php";
	$conexion=conexion();
	$nombre=$_POST['nombre'];
	$correo=$_POST['correo'];
	$telefono=$_POST['telefono'];

    $query = $conexion->query("SELECT * FROM formulario");
	while ($correovalidar = mysqli_fetch_array($query)) {
		$comuser=$correovalidar['correo'];
		if($correo==$comuser){
			$existe=10;
		break;
		}else{
			$existe=00;
		}
	}
	if($nombre==""||$correo==""||$telefono==""){
		echo 2;
	}else if($existe==10){
		echo 3;
	}else{
		$sql="INSERT into formulario (nombre,correo,telefono)
		values ('$nombre','$correo','$telefono')";
		echo $result=mysqli_query($conexion,$sql);		
	}
 ?>