const input1=document.getElementById('input');
function GenerateGift()
{
    var box;
    for(let i=0;i<input1.value;i++)
    {
        box+='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3pUHs3lQmIVzSGnaKmvQTL2wrh3yk8DC4WpRriZ6&s">'

    }
    document.getElementById("gift2").innerHTML=box;
}