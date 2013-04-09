// Momchi issues:
// 1. Hide/show elements even when their css was 'hidden'
// 2. Yes button expansion
// 3. Multiline input
// 4. Elements positioning? Bootstrap intro?

$(document).ready(function() {
    $('#stationSeen').hide();
    $('#shareButton').hide();
    $('#photoButton').hide();
    $('#shareComment').hide();
    $('#commentAccordion').accordion();
});

function onStationSeen() {
    $('#main').hide();
    $('#stationSeen').show();
}

function onYesButtonClicked() {   
    $('#noButton').hide();
    $('#shareButton').show();
    $('#photoButton').show();
    $('#shareComment').show();
}









/*
$(document).ready(function(){
     doFunc();
});
function doFunc()
{
   setTimeout(issNowPosition, 2000);
}
function issNowPosition()
{
    var issNow = (function(){
        var issNowLatitude;
        var issNowLongitude;
        function load(){
               $.ajax({
                  async: false,
                  type: "GET",
                  url: "http://api.open-notify.org/iss-now/",
                  dataType: "json",
                  success : function(data) { 
                      issNowLatitude = data.iss_position.latitude; 
                      issNowLongitude = data.iss_position.longitude;
                  }
                });
        }
        return {
            load : function() { 
                if(issNowLatitude) return;
                if(issNowLongitude) return;
                load();         
            },
            getIssNowLatitude: function(){
                 if(!issNowLatitude) load();
                 return issNowLatitude;
            },
            getIssNowLongitude: function(){
                if(!issNowLongitude) load();
                return issNowLongitude;
            }
        }
        //Call: issNow.getIssNowLatitude()
    })();
    issNow.load();
    
    var issNowMap = (function(){
        var issNowMapLocation;
        var issNowMapStatus;
        var issNowLatitude = issNow.getIssNowLatitude();
        var issNowLongitude = issNow.getIssNowLongitude();
        $('#main').append(issNowLatitude + "  " + issNowLongitude);
        function load(){
               $.ajax({
                  async: false,
                  type: "GET",
                  url: "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + issNowLatitude + "," + issNowLongitude + "&sensor=true",
                  dataType: "json",
                  success : function(data) { 
    
                      issNowMapStatus = data.status;
                      if(issNowMapStatus == "ZERO_RESULTS")
                      {
                           $('#main').append(issNowMapStatus);
                      }
                      else
                      {
                           issNowMapLocation = data.results[0].formatted_address;
                           $('#main').append(issNowMapLocation);   
                      }
                      
                      
                  }
                });
        }
        return {
            load : function() { 
                if(issNowMapStatus) return;
                load();         
            },
            getIssNowMap: function(){
                 if(!issNowMapLocation) load();
                 return issNowMapLocation;
            },
            getIssNowMapStat: function(){
                 if(!issNowStatus) load();
                 return issNowMapStatus;
            }
        }
    })();
    issNowMap.load();
    doFunc();
}
*/