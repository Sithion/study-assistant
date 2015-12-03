(function(){
	
	angular
	.module('studyApp')
	.controller('signupController', signupController);
	
	signupController.$inject = ['$http']
	
	function signupController($http){
		var vm = this;
		vm.title = "SignUp";
		
		vm.createNewUser = function(){
			
		}
		
	}
	
})();