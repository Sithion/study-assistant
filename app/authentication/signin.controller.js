(function () {
	'use strict';

	angular
		.module('studyApp')
		.controller('signinController', signinController);

	signinController.$inject = [];


	function signinController() {
		var vm = this;
		vm.title = "SignIn";
	}

})();