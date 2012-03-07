window.Employee = Backbone.Model.extend({

    urlRoot:"http://coenraets.org/qcon/services/employees",

    initialize:function () {
        this.reports = new EmployeeCollection();
        this.reports.url = 'http://coenraets.org/qcon/services/employees/' + this.id + '/reports';
    }

});

window.EmployeeCollection = Backbone.Collection.extend({

    model:Employee,

    url:"http://coenraets.org/qcon/services/employees",

    findByName:function (key) {
        var url = (key == '') ? 'http://coenraets.org/qcon/services/employees' : "http://coenraets.org/qcon/services/employees/search/" + key;
        console.log('findByName: ' + key);
        var self = this;
        $.ajax({
            url:url,
            dataType:"json",
            success:function (data) {
                console.log("search success: " + data.length);
                self.reset(data);
            }
        });
    }

});