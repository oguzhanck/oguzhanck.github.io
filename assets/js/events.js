$("document").ready(function () {
	$.ajax({
            url:"data.json",
            dataType:"json",
            type:"GET",
            success:function (data){
                $(".countdown").final_countdown({

                    start: data["countdown"][0].start,
                    end: data["countdown"][0].end,
                    now: data["countdown"][0].now,
                });
            },
            error(){
                console.log("Connection Failed");
            }
        })

});
