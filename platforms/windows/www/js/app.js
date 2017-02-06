// Ionic Starter App
var globalip = "http://makerits.com/jainoswalsajnanfedration/webservice/";
var globalip_2 = "http://makerits.com/jainoswalsajnanfedration/matrimonial/matrimonial_web";


// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform,$state,$ionicPopup,$ionicHistory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
	

  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  
  $ionicConfigProvider.views.transition('none');
  $ionicConfigProvider.tabs.position('bottom'); 
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
		controller: 'dashboardCtrl'
      }
    }
  })
  .state('app.sanvidhaan', {
    url: '/sanvidhaan',
    views: {
      'menuContent': {
        templateUrl: 'templates/sanvidhaan.html',
		/*controller: 'dashboardCtrl'*/
      }
    }
  })
  .state('app.padadhikari', {
    url: '/padadhikari',
    views: {
      'menuContent': {
        templateUrl: 'templates/padadhikari.html',
		/*controller: 'dashboardCtrl'*/
      }
    }
  })
  .state('app.karyakarini', {
    url: '/karyakarini',
    views: {
      'menuContent': {
        templateUrl: 'templates/karyakarini.html',
		/*controller: 'dashboardCtrl'*/
      }
    }
  })
  .state('app.uddeshya', {
    url: '/uddeshya',
    views: {
      'menuContent': {
        templateUrl: 'templates/uddeshya.html',
		/*controller: 'dashboardCtrl'*/
      }
    }
  })
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })
  .state('app.register', {
    url: '/register',
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html'
      }
    }
  })
  .state('app.forgot-password', {
    url: '/forgot-password',
    views: {
      'menuContent': {
        templateUrl: 'templates/forgot-password.html'
      }
    }
  })
  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html',
      }
    }
  })
  .state('app.matrimonial_contact', {
    url: '/matrimonial_contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/matrimonial_contact.html',
      }
    }
  })
  .state('app.jankari', {
    url: '/jankari',
    views: {
      'menuContent': {
        templateUrl: 'templates/jankari.html',
		controller: 'jankariCtrl'
      }
    }
  })
  .state('app.sandesh', {
    url: '/sandesh/:slug',
    views: {
      'menuContent': {
        templateUrl: 'templates/sandesh.html',
		controller: 'sandeshCtrl'
      }
    }
  })
  .state('app.parichaypatra', {
    url: '/parichaypatra',
    views: {
      'menuContent': {
        templateUrl: 'templates/parichaypatra.html',
		controller: 'parichaypatraCtrl'
      }
    }
  })
  .state('app.business_directory', {
    url: '/business_directory',
    views: {
      'menuContent': {
        templateUrl: 'templates/business_directory.html',
		/*controller: 'business_directoryCtrl'*/
      }
    }
  })
  .state('app.jain-thirth-yatra', {
		url: '/jain-thirth-yatra',
		views: {
			'menuContent': {
				templateUrl: 'jain-thirth-yatra.html',
				controller: 'ekal_khidkiCtrl'
			}
		}
	})
	.state('app.mahathirth-dharmshala', {
		url: '/mahathirth-dharmshala',
		views: {
			'menuContent': {
				templateUrl: 'mahathirth-dharmshala.html',
				controller: 'ekal_khidkiCtrl'
			}
		}
	})
	.state('app.shiksha', {
		url: '/shiksha',
		views: {
			'menuContent': {
				templateUrl: 'shiksha.html',
				controller: 'ekal_khidkiCtrl'
			}
		}
	})
	.state('app.swasthya', {
		url: '/swasthya',
		views: {
			'menuContent': {
				templateUrl: 'swasthya.html',
				controller: 'ekal_khidkiCtrl'
			}
		}
	})
	.state('app.myprofile', {
		url: '/myprofile',
		views: {
			'menuContent': {
				templateUrl: 'myprofile.html',
				/*controller: 'ekal_khidkiCtrl'*/
			}
		}
	})
	.state('app.account', {
		url: '/account',
		views: {
			'menuContent': {
				templateUrl: 'account.html',
				/*controller: 'ekal_khidkiCtrl'*/
			}
		}
	})
	.state('app.change-password', {
		url: '/change-password',
		views: {
			'menuContent': {
				templateUrl: 'change-password.html',
				/*controller: 'ekal_khidkiCtrl'*/
			}
		}
	})
	.state('app.privacy', {
		url: '/privacy',
		views: {
			'menuContent': {
				templateUrl: 'privacy.html',
				/*controller: 'ekal_khidkiCtrl'*/
			}
		}
	})
	.state('app.matrimonial', {
		url: '/matrimonial',
		views: {
			'menuContent': {
				templateUrl: 'templates/matrimonial.html',
				controller: 'matrimonialCtrl'
			}
		}
	})
	.state('app.member-login', {
		url: '/member-login',
		views: {
		  'menuContent': {
			templateUrl: 'templates/member-login.html'
		  }
		}
	})
	.state('app.member-registration', {
		url: '/member-registration',
		views: {
			'menuContent': {
				templateUrl: 'templates/member-registration.html',
				/*controller: 'profileCtrl'*/
			}
		}
	})
	.state('app.forgot-password-member', {
		url: '/forgot-password-member',
		views: {
			'menuContent': {
				templateUrl: 'templates/forgot-password-member.html',
			}
		}
	})
	.state('app.introductionform', {
		url: '/introductionform',
		views: {
			'menuContent': {
				templateUrl: 'templates/introductionform.html'
			}
		}
	})
	.state('app.member-list', {
		url: '/member-list',
		views: {
			'menuContent': {
				templateUrl: 'templates/member-list.html',
				controller: 'memberlistCtrl'
			}
		}
	})
	.state('app.member-profile', {
		url: '/member-profile/:user_id',
		views: {
		  'menuContent': {
			templateUrl: 'templates/member-profile.html',
			controller: 'memberprofileCtrl'
		  }
		}
	})
	.state('app.profile-edit', {
		url: '/profile-edit',
		views: {
		  'menuContent': {
			templateUrl: 'templates/profile-edit.html',
			/*controller: 'profileCtrl'*/
		  }
		}
	})
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
})

.directive('map', function() {
	return {
		restrict: 'E',
		scope: {
		  onCreate: '&'
		},
		link: function ($scope, $element, $attr) {
		  function initialize() {
			var myLatLng = {lat:22.731573, lng: 75.875749};
			var mapOptions = {
			  center: new google.maps.LatLng(22.731573, 75.875749),
			  zoom: 14,
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map($element[0], mapOptions);
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				label: "A",
				content:"Hello World!"
			});
			var infowindow = new google.maps.InfoWindow({
			  content:"<p> अ. भा. जैन ओसवाल साजनान फेडरेशन ( रजि. ) , <p>19/16 – ई,विश्राम कालोनी, वाय इन रोड इंदौर (मध्यप्रदेश)</p>"
			});
			infowindow.open(map,marker);
			
			$scope.onCreate({map: map});
	
			// Stop the side bar from dragging when mousedown/tapdown on the map
			google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
			  e.preventDefault();
			  return false;
			});
		  }
	
		  if (document.readyState === "complete") {
			initialize();
		  } else {
			google.maps.event.addDomListener(window, 'load', initialize);
		  }
		}
  	}
});


