var formulario = angular.module('formulario', []);

formulario.controller('mainController', ['$scope', function($scope) {


 /*/funcin de subit depues de validar todos 
	%scope.submitForm = function(isValid){
		//asegura que el form a sido completamente validado
		if (isValid) {
     		 alert('our form is amazing');
   		 }

	}*/

	//formualario de efectivo
 	$scope.efectivo=false;
 	$scope.mostrarEfectivo= function(){
 		if ($scope.efectivo==false) {
 			$scope.efectivo=true;
 			$scope.bt_efectivo={
				'opacity': '1',
				'background': '#8CC63F'
			}

			//oculta lo demas formularios
			$scope.visa=false;
			$scope.master=false;
			$scope.pse=false;
			$scope.bt_visa={
				"opacity": "0.5"				
			}
			$scope.bt_master={
				"opacity": "0.5"				
			}
			$scope.bt_pse={
				"opacity": "0.5"				
			}
			
 			
 		}else{
 			$scope.efectivo=false;
 			$scope.bt_efectivo={
				"opacity": "0.5"				
			}
			
			
 		}
 		
 	}


	//formualario de pse
 	$scope.pse=false;
 	$scope.mostrarPSE= function(){
 		if ($scope.pse==false) {
 			$scope.pse=true;
 			$scope.bt_pse={
				"opacity": "1"
			}

			//oculta lo demas formularios
			$scope.visa=false;
			$scope.master=false;
			$scope.bt_visa={
				"opacity": "0.5"				
			}
			$scope.bt_master={
				"opacity": "0.5"				
			}
			$scope.bt_efectivo={
				"opacity": "0.5"				
			}
			
 			
 		}else{
 			$scope.pse=false;
 			$scope.bt_pse={
				"opacity": "0.5"				
			}
			
			
 		}
 		
 	}

 	//formulario de visa
 	$scope.visa=false;
 	$scope.mostrarVisa= function(){
 		if ($scope.visa==false) {
 			$scope.visa=true;
 			$scope.bt_visa={
				"opacity": "1"
			}

			//ocualta lo demas formularios
			$scope.pse=false;
			$scope.master=false;
			$scope.bt_pse={
				"opacity": "0.5"				
			}
			$scope.bt_master={
				"opacity": "0.5"				
			}
			$scope.bt_efectivo={
				"opacity": "0.5"				
			}
			
 			
 		}else{
 			$scope.visa=false;
 			$scope.bt_visa={
				"opacity": "0.5"				
			}
			
 		}
 		
 	}

 	//formulario de master
 	$scope.master=false;
 	$scope.mostrarMaster= function(){
 		if ($scope.master==false) {
 			$scope.master=true;
 			$scope.bt_master={
				"opacity": "1"


			}

			//ocualta lo demas formularios
			$scope.pse=false;
			$scope.visa=false;
			$scope.bt_pse={
				"opacity": "0.5"				
			}
			$scope.bt_visa={
				"opacity": "0.5"				
			}
			$scope.bt_efectivo={
				"opacity": "0.5"				
			}
			
 			
 		}else{
 			$scope.master=false;
 			$scope.bt_master={
				"opacity": "0.5"				
			}
			
 		}
 		
 	}

}]);

