/*
            var key;
            var GoogleAuth;
            var userStatus;			//true se e' loggato, false altrimenti.
            var MyuserID;
            var MyuserName;
           
             //	Description: Inizializza l'API di Google per l'autenticazione.
             
            function hclientLoad() {
                gapi.load('client:auth2', startClient);
            }

             //	Description: Inizializza oggetto gapi.client, che verra' usato per fare richieste
        
            function startClient() {
                gapi.client.init({
                    'apiKey': 'f29I50773yLM95tUAim2EiSD',
                    'clientId': '627047363493-2kvb9g76tspq06elupu2cmtp83f24mj6.apps.googleusercontent.com',
                    'scope': 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me',
                    'key': key
                }).then(function () {
                    GoogleAuth = gapi.auth2.getAuthInstance();

                    signedInButtonProp();
                    GoogleAuth.isSignedIn.listen(signedInHandler);

                    var event;
		$('#signInButton').click(function(){
			signInOnClick(event);
		});
                });
            }

           
             //	Description: Cambia l'aspetto del pulsante usato per fare Log in con il proprio account di Google in base a se si e' Signed in oppure no.
             //	Parameters:
             //	- "signed": Booleano che indica se si e' loggati o no con il proprio account Google.
        
            function signedInHandler(signed) {
                if (signed)
                    signedInButtonProp();
                else
                    signedOutButtonProp();
            }

           // Description: Camibia l'aspetto del pulsante per indicare che ora si e' collegati con il proprio account, cambia la funzione collegata
            

            function signedInButtonProp() {
                if (GoogleAuth.isSignedIn.get())
                {
                    $('#signInButton').removeClass('btn-warning').addClass('btn-success');
                    $('#signInButton').html('Sign Out');
                    $('#signInButton').removeAttr('onclick');
                    $('#signInButton').click(function () {
                        GoogleAuth.signOut();	//Log out di google
                    });
                }
            }

        
             //	Description: Camibia l'aspetto del pulsante per indicare che ora non si e' collegati con il proprio account, cambia la funzione collegata
             //				 in modo da effettuare il log in se cliccato.
             

            function signedOutButtonProp() {
                if (GoogleAuth.isSignedIn.get() == false)
                {
                    $('#signInButton').removeClass('btn-success').addClass('btn-warning');
                    $('#signInButton').html('Sign In');
                    $('#signInButton').removeAttr('onclick');
                    $('#signInButton').click(function () {
                        signInOnClick(event);
                    });
                }
            }


             //	Description: Funzione di callback a quanto pare necessaria per associare il login con un click.
             //	Parameters:
             //	- "event": richiesto, ma inutilizzato.
             

            function signInOnClick(event) {
                GoogleAuth.signIn();
            }
            
            
            */
           
             /*
             // Called when Google Javascript API Javascript is loaded
             function HandleGoogleApiLibrary() {
             // Load "client" & "auth2" libraries
             gapi.load('client:auth2', {
             callback: function () {
             // Initialize client & auth libraries
             gapi.client.init({
             apiKey: 'f29I50773yLM95tUAim2EiSD',
             clientId: '627047363493-2kvb9g76tspq06elupu2cmtp83f24mj6.apps.googleusercontent.com',
             scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
             }).then(
             function (success) {
             // Libraries are initialized successfully
             // You can now make API calls
             },
             function (error) {
             // Error occurred
             // console.log(error) to find the reason
             }
             );
             },
             onerror: function () {
             // Failed to load libraries
             }
             });
             }
             
             // Call login API on a click event
             $("#login").on('click', function () {
             // API call for Google login
             gapi.auth2.getAuthInstance().signIn().then(
             function (success) {
             // Login API call is successful	
             },
             function (error) {
             // Error occurred
             // console.log(error) to find the reason
             }
             );
             });
             
             
             */