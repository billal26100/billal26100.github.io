
fetch("https://raw.githubusercontent.com/billal26100/billal26100.github.io/refs/heads/main/json/birox.json",
  
)



.then(r=>r.json())
.then(birox=>{
  const element=document.getElementById("tracker");
  if (element) element.remove();
  
  console.log(birox);
  console.log(birox.data.platformInfo.platformUserHandle);
  console.log(birox.data.userInfo);
  
  
  const nom = birox.data.platformInfo.platformUserHandle;
  const niveau = birox.data.userInfo.accountlevel;
  
  console.log(birox.data.segments)
  const profile = document.getElementById("profil");
  profile.innerHTML =  'Name: '  + birox.data.platformInfo.platformUserHandle;
  profile.innerHTML +=  '<br>';
  profile.innerHTML +=  'Level: ' +  birox .data.metadata.accountLevel;
  
  profile.innerHTML +='<br>'
  profile.innerHTML +='Rank :' +  birox.data.segments[1].stats.peakRating.displayValue;
  
});

