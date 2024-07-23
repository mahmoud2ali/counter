$(document).ready(function () {
    
    let w;
    $("#load").hide();
    $("#coutbtn").click(()=>{ 
        let endCount = parseInt($("#in").val());

        $("#load").show();
        $("#out").addClass("progress");

        if(window.Worker)
        {
            w = new Worker("./worker.js");

            w.postMessage(endCount);
            w.onmessage = (e)=>{
                if(e.data == "done")
                {
                    $("#load").hide();
                    $("#out").removeClass("progress");    
                }
                else
                {
                    $("#out").html(e.data);
                }
            }
        }
    });


    $("#stop").click(()=>{ 
        w.terminate();
        $("#load").hide();
        $("#out").removeClass("progress");
    });
});