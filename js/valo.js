fetch("https://valorant-api.com/v1/agents")
.then(r=> r.json())  
.then(d=>{ 
    const table = document.getElementById("AgentTable");
    d.data.forEach(a => {
        
        if (!a.fullPortrait)return
        
        
        const row = document.createElement("tr");
        row.innerHTML= 
        '<td>'+ a.displayName+'</td>'+
        '<td><img class="portrait" src='+a.fullPortrait+'> </td>' +
        '<td>' + (a.description ) + '</td>' +//les description
        '<td>' +
        a.abilities.map(cap => //transforme toute les cap en html
            '<div><strong>' + cap.displayName + '</strong>: ' + //<strong> POUR METTRE EN GRAS
            (cap.description ) + '</div>'
        ).join('') +//POUR COLLER TOUTE LES CHAINE SOIT FAIRE BIEN LE TABLEAU
        '</td>';
        
        
        
        
        
        
        table.appendChild(row);
        
        
        
        
    });
});