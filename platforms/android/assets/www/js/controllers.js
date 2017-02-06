var global_login_id = "";
var global_states = ['New Delhi','Andaman/Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Dadra/Nagar Haveli','Daman/Diu','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu/Kashmir','Jharkhand','Karnataka','Kerala','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Orissa','Pondicherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Tripura','Uttaranchal','Uttar Pradesh','West Bengal'];
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})
/** Member Logout Controller **/
.controller('LogoutCtrl', function($scope,$rootScope,$ionicHistory,$state) {
 $scope.login = "";
 $rootScope.$on('login_var', function (event, args) {
	$scope.login = args.global_login;
	global_login_id = args.global_login;
 });
 $scope.logout = function(){
		var login_var = "";
		$rootScope.$broadcast('login_var',{global_login:login_var});
		window.localStorage.removeItem("login_var_local");
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
    };
})
/** Member Login Controller**/
.controller('loginCtrl',function($scope,$http,$state,$ionicLoading,$ionicPopup,$ionicHistory,$rootScope,$ionicSideMenuDelegate) {
	$scope.GotoPage = function(page){ 
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('app.'+page);
	}
	/* http://dreamgraphs.com/web_service.php?action=user_login&email=user@gmail.com&password=admin123 */
	$scope.submitLoginForm = function(FormName) {
		var action = "user_login";
        var data_parameters = "action="+action+"&email="+$scope.email+"&password="+$scope.password;
		if(FormName.$invalid) {
			console.log('Form is invalid');
			$ionicPopup.show({
			  template: '',
			  title: '<p><i class="ion-android-cancel icon-popup"></i></p> Form Is Incomplete',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-custom'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="ios" class="spinner-primary"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				if(response[0].success == 'Y'){
					$scope.email = $scope.password = '' ;
					FormName.$setPristine();
					$ionicHistory.nextViewOptions({
						disableBack: true
					});
					$rootScope.$broadcast('login_var',{global_login:response[0].msg.id});
					window.localStorage.setItem("login_var_local",response[0].msg.id);
					$state.go("app.home");
				}
				else{
					$ionicPopup.show({
					  template: '',
					  title: '<p><i class="ion-android-cancel icon-popup"></i></p> '+response[0].msg,
					  scope: $scope,
					  buttons: [
						{ 
						  text: 'Ok',
						  type: 'button-custom'
						},
					  ]
					});
				}
				$ionicLoading.hide();
			});
		}
	};
	$ionicSideMenuDelegate.canDragContent(false);
})
/** Member Registration Controller**/
.controller('registrationCtrl',function($scope,$http,$state,$ionicLoading,$ionicPopup) {
	/* http://jainoswalfederation.com/webservice/?action=register */
	$scope.indianstates = global_states;
	$scope.userdata = {};
	$scope.submitRegistrationForm = function(FormName) {
		var action = "user_registration";
		var data_parameters = "action="+action+"&first_name="+$scope.userdata.first_name+"&last_name="+$scope.userdata.last_name+"&email="+$scope.userdata.email+"&password="+$scope.userdata.password+"&phone="+$scope.userdata.phone+"&blood_group="+$scope.userdata.blood_group+"&dateofbirth="+$scope.userdata.dateofbirth+"&gender="+$scope.userdata.gender+"&country=india"+"&state="+$scope.userdata.state+"&city="+$scope.userdata.city+"&pincode="+$scope.userdata.pincode+"&address=''";
		if(FormName.$invalid) {
			console.log('Form is invalid');
			$ionicPopup.show({
			  template: '',
			  title: '<p><i class="ion-android-cancel icon-popup"></i></p> Form Is Incomplete',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-custom'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="ios" class="spinner-primary"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$ionicPopup.show({
				  template: '',
				  title: '<p><i class="ion-ios-information icon-popup"></i></p> '+response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-custom'
					},
				  ]
				});
				if(response[0].success == 'Y'){
					$scope.userdata = {};
					FormName.$setPristine();
				}
				$ionicLoading.hide();
			});
		}
	};
})
/** Forgot Password Controller **/
.controller('forgotPassCtrl',function($scope,$http,$ionicLoading,$state,$ionicPopup) {
	/* http://dreamgraphs.com/web_service.php?action=forgot_password&email=jaymakerits@gmail.com */
	$scope.submitforgotPassForm = function(FormName) {
		var action = "forgot_password";
		var data_parameters = "action="+action+"&email="+$scope.email;
		if(FormName.$invalid) {
			console.log('Form is invalid');
			$ionicPopup.show({
			  template: '',
			  title: '<p><i class="ion-android-cancel icon-popup"></i></p> Form Is Incomplete',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-custom'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="ios" class="spinner-primary"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$ionicPopup.show({
				  template: '',
				  title: '<p><i class="ion-ios-information icon-popup"></i></p> '+response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-custom'
					},
				  ]
				});
				if(response[0].success == 'Y'){
					$scope.email = '' ;
					FormName.$setPristine();
				}
				$ionicLoading.hide();
			});
		}
	};
})
/** Change Password Controller **/
.controller('changePassCtrl',function($scope,$http,$ionicLoading,$state,$ionicPopup) {
	$scope.data = {};
	/* http://dreamgraphs.com/web_service.php?action=change_password&user_id=48&old_password=123&current_password=12345 */
	$scope.submitchangePassForm = function(FormName) {
		var action = "change_password";
		var data_parameters = "action="+action+"&user_id="+global_login_id+"&old_password="+$scope.data.old_password+"&current_password="+$scope.data.password;
		if(FormName.$invalid) {
			console.log('Form is invalid');
			$ionicPopup.show({
			  template: '',
			  title: '<p><i class="ion-android-cancel icon-popup"></i></p> Form Is Incomplete',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-custom'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="ios" class="spinner-primary"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$ionicPopup.show({
				  template: '',
				  title: '<p><i class="ion-ios-information icon-popup"></i></p> '+response.msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-custom'
					},
				  ]
				});
				if(response.success == 'Y'){
					$scope.data.old_password = $scope.data.password = $scope.data.confirmpassword = '' ;
					FormName.$setPristine();
				}
				$ionicLoading.hide();
			});
		}
	};
})
/** Member Profile Controller **/
.controller('alarmCtrl',function($scope,$http,$ionicLoading,$ionicHistory,$state,$ionicPopup,$ionicModal,$filter,$interval) {
	
	$scope.alarms = [];
	$scope.alarm = {};
    $ionicModal.fromTemplateUrl('add-alarm.html',function(modal){
		$scope.setalarm = modal;
	},
	{
		scope : $scope,
		animation : 'slide-in-up'
	});
	$scope.newalarm = function (){
		$scope.setalarm.show();  //-----> open our modal
	};
	$scope.closesetalarm = function(){
		$scope.setalarm.hide(); // -----> Close our modal
	};
	$scope.createalarm = function (alarm) {
		var time = alarm.hour+":"+alarm.min+" "+alarm.pos; // 12:00 PM Input to this format
		 $scope.alarms.push({
		   time  : time , on : true  
		 });
		 localStorage.setItem('alarms', JSON.stringify($scope.alarms)); //store alarms in localstorage as key alarms
		 $scope.alarm = {}; // once saved the given data empty the form
		 $scope.setalarm.hide(); //close the modal
	};
	$scope.offalarm = function(index){
		if (index !== -1) {
		  if($scope.alarms[index].on){
			$scope.alarms[index].on = true;} //turn on alarm
		  else{
			$scope.alarms[index].on = false;} //turn off alarm
		}
		localStorage.setItem('alarms', JSON.stringify($scope.alarms)); //once change made save that in localstorage
	  };
	   $scope.removealarm = function(index){
		$scope.alarms.splice(index,1); //Delete the index object from the array
		localStorage.setItem('alarms', JSON.stringify($scope.alarms)); // we made a change we need to save it in localstorage
	  };
	  $scope.getalarms = function (){
    $scope.alarms = (localStorage.getItem('alarms')!==null) ? JSON.parse(localStorage.getItem('alarms')) : [];//retrieve form localstorage
    $scope.Time = $filter('date')(new Date(), 'hh:mm a'); //take the current time from machine
   
  };
 $interval(function() {
       $scope.alarmcheck(); //Check any alarm now once a minute
   }, 5000);

   $interval(function() {
      $scope.Time = $filter('date')(new Date(), 'hh:mm a'); //Check current time one minute once
   }, 5000);
$scope.alarmcheck = function (){
	
       var input = $scope.alarms, time = $scope.Time; //Take object of arrays and time in local variable 
       var i=0, len=input.length;
       for (; i<len; i++) {
         if (input[i].time.trim() == time.trim() && input[i].on) { //Check there's a alarm for now and it's in on 
           $ionicPopup.alert({
              title: 'Alarm',
              template: 'Wake up'             // If it is there open popup to display
            });
         }
     }
   };
})
/** Member Profile Controller **/
.controller('memberProfileCtrl',function($scope,$http,$ionicLoading,$ionicHistory,$state,$ionicPopup) {
	$scope.GotoPage = function(page){ 
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('app.'+page);
	}
})
/** Home Controller **/
.controller('homeCtrl', function($http,$scope,$state,$ionicHistory,$ionicSlideBoxDelegate,$ionicPopup,$ionicLoading,$timeout,$rootScope) {
	/** Check Login **/
		$scope.$on('$ionicView.enter', function() {
			var login_var_local = window.localStorage.getItem("login_var_local");
			if(login_var_local !== undefined && login_var_local != null) {
				console.log(login_var_local);
				$rootScope.$broadcast('login_var',{global_login:login_var_local});
				/** http://dreamgraphs.com/web_service.php?action=testimonials **/
				var action = "testimonials";
				var data_parameters = "action="+action;
				$ionicLoading.show({template: '<ion-spinner icon="ios" class="spinner-primary"></ion-spinner>'});
				$http.post(globalip,data_parameters, {
					headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
				})
				.success(function(response) {
					if(response.success == "Y"){
						//window.localStorage.setItem("offineData.homepageData", angular.toJson(response));
						$scope.complete_challenge = response.complete_challenge;
						$scope.testimonials = response.testimonials;
						setTimeout(function(){
							$ionicSlideBoxDelegate.update();
							$ionicSlideBoxDelegate.loop(true);
						},1000);
						$ionicLoading.hide();
					}
				});
			}
			else{
				$state.go('app.login');
			}	
		});
	/** End Check Login **/
	// Form
	$scope.formData = {};
	$scope.submitshareForm = function(FormName) {
		/** https://www.dreamgraphs.com/web_service.php?action=invite&email=jaymakerits@gmail.com **/
		var action = "invite";
		var data_parameters = "action="+action+"&email="+$scope.formData.email ;
		if(FormName.$invalid) {
			console.log('Form is invalid');
			$ionicPopup.show({
			  template: '',
			  title: '<p><i class="ion-android-cancel icon-popup"></i></p> Form Is Incomplete',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-custom'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="ios" class="spinner-primary"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$ionicPopup.show({
				  template: '',
				  title: '<p><i class="ion-ios-information icon-popup"></i></p> '+response.msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-custom'
					},
				  ]
				});
				if(response.success == 'Y'){
					$scope.formData.email = '';
					FormName.$setPristine();
				}
				$ionicLoading.hide();
			});
		}
	}
})
/** Users List Controller **/
.controller('usersListCtrl', function($http,$scope,$state,$ionicLoading,$stateParams,$ionicHistory,$ionicScrollDelegate) {
	/** http://dreamgraphs.com/web_service.php?action=users_list&user_id=12 **/
	$scope.$on('$ionicView.enter', function() {
		var action = "users_list";
		var data_parameters = "action="+action+"&user_id="+global_login_id;
		$ionicLoading.show({template: '<ion-spinner icon="ios" class="spinner-primary"></ion-spinner>'});
		$http.post(globalip,data_parameters, {
			headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
		})
		.success(function(response) {
			if(response.success == "Y"){
				//window.localStorage.setItem("offineData.homepageData", angular.toJson(response));
				$scope.users = response.data;
				$ionicLoading.hide();
			}
		});
	});
	$scope.scrollTop = function() {
		$ionicScrollDelegate.scrollTop();
	};
})
/** Menu **/
.controller('MenuController', function($scope,$ionicSideMenuDelegate,$state,$ionicHistory) {
	$scope.GotoPage = function(page){ 
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('app.'+page);
		$ionicSideMenuDelegate.toggleLeft();
	}
});
