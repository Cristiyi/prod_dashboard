var cloudant = require('../models/cloudant');
var express = require('express');
var router = express.Router();
var request = require("request");
var schedule = require('node-schedule');
var googleAuth = require('google-oauth-jwt');
var googleRequest = require('google-oauth-jwt').requestWithJWT();
var dateFormat = require('dateformat');


router.get('/dashBoard', function(req, res) {
  if (req.query.version === 'prod') {
    cloudant.useProd();
  } else {
    cloudant.useDev();
  }
  db = cloudant.db.use(cloudant.DBName);
  db.view('blogs', 'dashBoardCards', function(err, body) {
    if (err) {
      console.error(err);
      res.status(401).send(err);
    } else {
      res.send(body);
    };
  });
});

router.get('/plugins', function(req, res) {
  if (req.query.version === 'prod') {
    cloudant.useProd();
  } else {
    cloudant.useDev();
  }
  db = cloudant.db.use(cloudant.DBName);
  db.view('blogs', 'plugins', function(err, body) {
    if (err) {
      console.error(err);
      res.status(401).send(err);
    } else {
      res.send(body);
    };
  });
});

router.get('/blogDetails', function(req, res) {
  if (req.query.version === 'prod') {
    cloudant.useProd();
  } else {
    cloudant.useDev();
  }
  db = cloudant.db.use(cloudant.DBName);
  db.view('blogs', 'blogDetails', function(err, body) {
    if (err) {
      console.error(err);
      res.status(401).send(err);
    } else {
      res.send(body);
    };
  });
})


router.get('/themeDetails', function(req, res) {
  if (req.query.version === 'prod') {
    cloudant.useProd();
  } else {
    cloudant.useDev();
  }
  db = cloudant.db.use(cloudant.DBName);
  db.view('blogs', 'themeDetails', function(err, body) {
    if (err) {
      console.error(err);
      res.status(401).send(err);
    } else {
      res.send(body);
    };
  });
})

router.get('/pluginDetails', function(req, res) {
  if (req.query.version === 'prod') {
    cloudant.useProd();
  } else {
    cloudant.useDev();
  }
  db = cloudant.db.use(cloudant.DBName);
  db.view('blogs', 'pluginDetails', function(err, body) {
    if (err) {
      console.error(err);
      res.status(401).send(err);
    } else {
      res.send(body);
    };
  });
})

router.get('/userDetails', function(req, res) {
  if (req.query.version === 'prod') {
    cloudant.useProd();
  } else {
    cloudant.useDev();
  }
  db = cloudant.db.use(cloudant.DBName);
  db.view('blogs', 'userDetails', function(err, body) {
    if (err) {
      console.error(err);
      res.status(401).send(err);
    } else {
      res.send(body);
    };
  });
})

router.get('/pageDetails', function(req, res) {
  if (req.query.version === 'prod') {
    cloudant.useProd();
  } else {
    cloudant.useDev();
  }
  db = cloudant.db.use(cloudant.DBName);
  db.view('blogs', 'pageDetails', function(err, body) {
    if (err) {
      console.error(err);
      res.status(401).send(err);
    } else {
      res.send(body);
    };
  });
})


router.get('/googleAnalytics', function(req, res) {
  if (req.query.version === 'prod') {
    cloudant.useProd();
  } else {
    cloudant.useDev();
  }
  db = cloudant.db.use(cloudant.DBName);
  var blogsValue = ''
  db.view('blogs', 'blogsName', function(err, body) {
    if (err) {
      console.error(err);
      res.status(401).send(err);
    } else if (process.env.VERSION != 'prod') {
      var result = [
        ["/?s=Watson&lnk=mhsrch&v=18&en=utf&lang=en&cc=us", "1"],
        ["/?s=digital", "1"],
        ["/?s=digital+certificate+authority&lnk=mhsrch&v=18&en=utf&lang=en&cc=us", "1"],
        ["/analytics-zone/", "2738"],
        ["/azami/", "204"],
        ["/ba-support-link/", "1511"],
        ["/base-and-solve/", "1156"],
        ["/beyond-the-wallet-entering-a-world-of-frictionless-commerce/", "12"],
        ["/blog-owner-support/", "24"],
        ["/bluemix/", "34143"],
        ["/brexit/", "258"],
        ["/brki/", "1172"],
        ["/business-insight/", "65"],
        ["/business-partner-blog/", "239"],
        ["/business-transformation-news/", "31"],
        ["/citizen-ibm/", "4091"],
        ["/client-voices/", "30"],
        ["/cloud-and-information-management/", "1"],
        ["/cloud-computing/", "42445"],
        ["/commerce/", "47485"],
        ["/criqueliere/", "21"],
        ["/cross-selling/", "113"],
        ["/data-protection-retention/", "38"],
        ["/digital-devops/", "1266"],
        ["/digital-marketing/", "1"],
        ["/dmexco-gave-lots-of-ingredients-but-whats-the-digital-marketing-recipe/", "1"],
        ["/ecm/", "4968"],
        ["/emerging-technology/", "1590"],
        ["/energy-utilities-solution-architects/", "25"],
        ["/engagement/", "112"],
        ["/fulhamfc/", "45"],
        ["/game-changers/", "136"],
        ["/gbs-fi-content/", "45"],
        ["/how-emotional-engagement-can-be-used-to-increase-customer-loyalty/", "1"],
        ["/ianlsblog/", "17"],
        ["/ibm-social-software/", "208"],
        ["/ibm-training/", "3190"],
        ["/insights-on-business/", "19731"],
        ["/internet-of-things/", "29054"],
        ["/ip-management/", "54"],
        ["/jikimari/", "18"],
        ["/kamoshi/", "275"],
        ["/lacafe/", "6"],
        ["/latinos/", "33385"],
        ["/linux-at-ibm/", "24"],
        ["/nezcc/", "41"],
        ["/nordic-msp/", "818"],
        ["/pachi/", "2789"],
        ["/peppol-by-ibm/", "371"],
        ["/performance/", "67"],
        ["/pro-vision/", "3299"],
        ["/psirt/", "10880"],
        ["/robertoa/", "2756"],
        ["/sejasocial/", "24"],
        ["/smarter-workforce/", "4544"],
        ["/sweeden/", "1588"],
        ["/systems", "6"],
        ["/systems-MU/", "104"],
        ["/systems-nordic/", "397"],
        ["/systems/", "40538"],
        ["/tech-content/", "153"],
        ["/think-leaders", "1"],
        ["/think-leaders/", "5382"],
        ["/think/", "1186"],
        ["/tokyo-soc/", "1078"],
        ["/transformacion/", "102"],
        ["/watson-health/", "1613"],
        ["/watson-hub/", "95"],
        ["/watson/", "3"],
        ["/websphere-commerce/", "198"]
      ];
      res.send(result);
    } else if (body != '' && body.rows != undefined && body.rows.length != 0) {
      var pageLevelFilter = "ga:pagePathLevel2=@",
        commaValue = ',',
        blogsValue = '';
      for (var i = 0; i < body.rows.length; i++) {
        if (i == body.rows.length - 1) commaValue = '';
        blogsValue = blogsValue + pageLevelFilter + body.rows[i].id + commaValue;
      }
      googleRequest({
        url: 'https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A123739303&start-date=30daysAgo&end-date=today&metrics=ga%3Apageviews&dimensions=ga%3ApagePathLevel2&filters=' + blogsValue,
        jwt: {
          email: 'ibmblogs@ibmblogsproject.iam.gserviceaccount.com',
          key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC54xnvEt0zhRvV\nL1i9dLEX5KzCQ76hccdb6Cr1P/AyAqCRXF4iWGnD0yWy8SNN3EeqscaO06mHITYz\nMzvsE3eldhVHpAvFeUEipQ7tmae49R9b6Sz7sYgCaYAmaPcWEOTVvzvPEDYqIVSQ\nPCSLNbWpXfffrYAYKZqUH1DIQCSsAkkTN8tQ0lrA85FRorN8YDjG46BtUpQRVeFS\n9FFsRe+Z+dWtm7E9nkCpFFltePZjSxZ1eh3CR2d5gA3Jm57RTdWWVONBLbImvlnN\nNccrR1SX0c+HTDVZbBLuBkSVLpTIGDsMDTVXkmUQvZ2+EempzJBth2u6GMUN5RM5\nRtUwEBJNAgMBAAECggEAJVFvcmyiFebCKLFhql9T8k0JVdLN4ZF7CXt5rFTSvueC\nHsyhZVnEmfi418zLXqU7igw4pZHete83911wyTs7SO+E5CYN6u4l4nOqpI61ek9T\npVsRmdIRURKnFI78E+T+W98RfcduaFTaqj44w+3bc44W5kPptHAdxWDoEdu2wQU4\nyzTYdl9n0HBslmlg7X6/IQ1DonjgTvq2FshR3wb0EmD15CwTQ/1JPiLW1DZW2vw3\nJtiaqn5GTCbD0SFR3qOk3r4huZjFIzdU/sdTyOK8LGFJWTcdHryI83NJ4RDd7qEd\nPhC/2V2zNt85WMWjTHV60zFbITL3ekBFgx2lGdNcwQKBgQDiFo+c79BPBV3WeMt3\n/LRXQi+DNB7l/ONA2Etko/fPD/kISUuMBfjtt2HEXaOSaF45eHSL5Ea8BuzQEOcJ\nGk5iL8VCapDB5B8KiGlJ0C8CvIaMIFukDwEN9igVVPEYkbnMM6wfaBg0oxCgAiWo\noMW7k4HygavH7/r7bOr4QzSQkQKBgQDSevYiNr/POTdXhUWvXpmtGrFCkTKJSfR7\n1NYrgY/QJ4dsGkdSnCvJ/spwCJeXv/LfdU/KHc3o3bS6TwyrCnWz1fRFm7TCa0dq\ns5AkPLZF7VJtyjO1TyIoZnpmqJNFx9S3b9/GI4PUJpH17ogbF3LpTsMFPnSkSjk/\n/VRyDnOD/QKBgBoY+pjmAcitWOih5vLBw9tys2NUx+BKcb0ReppyZu+K63cuZr8S\nDWr7SRjOqkwDKiU+J03imtunfPyDhvfBBp1E4GNLQ8xt1bt0hZrUoiiRtIJGVe25\nIakH6haUSIRKhgTxTgQOEwU4cXnW5ZvyewCtBUoF99tLc1BEgVcJAu9RAoGAF2S7\nPoo/P1Topb2WRSuKgQbadL+WklO57Jl3RFaeGVCLaKRzEOdypny/GzyZPLCE2fk7\n6Qbu/9bEY4Cts8Tx2A8Lm0D3EjTCN0XF24Ez8Qmzg6hZnukwrrTVHdvWoobXSZwR\njwAbgtTWnDLqxbgReYTbgBW0+R2Wx1nsrNCWXjECgYA03WB/r6QYxzlbP1JgMNYQ\nBywpOSAG3kRMPjoACWErXHD/Y4zylc/xRBTH/yBt5WCmQLjt+uS1QWnkjzq0fW9q\nWxmYPeoZTCA5Zdw7SS4o/q1yzvonQJ1HmwpYPC099C2ULxnWt6QgCJtjlNtwJkke\nGR0E+EMqaThzI2q6BZoRoQ==\n-----END PRIVATE KEY-----\n',
          scopes: ['https://www.googleapis.com/auth/analytics']
        }
      }, function(err, res1, bodyNew) {
        if (err) {
          console.log("Error while authenticating in googleAuth");
          res.status(401).send(err);
        } else {
          var result = JSON.parse(bodyNew);
          res.send(result.rows);
        }
      });
    };
  });
});


router.get('/publicBlogs', function(req, res) {
  db = cloudant.db.use(cloudant.DBName);
  db.get('allBlogs', function(err, body) {
    if (err) {
      console.error(err);
      res.status(401).send(err);
    } else {
      res.send(body);
    };
  });
});

router.get('/blogName/:name', function(req, res) {
  var blogName = req.params.name;
  db = cloudant.db.use(cloudant.DBName);
  db.get(blogName, function(err, body) {
    if (err) {
      console.error(err);
      res.status(401).send(err);
    } else {
      res.send(body);
    };
  });
})

var prdDocDeleteJob = schedule.scheduleJob({ hour: 23, minute: 20 }, function() {
  dbType = cloudant.db.use(cloudant.DBNamePrdJob);
  prodAndPreDelete(dbType);
});

var preDocDeleteJob = schedule.scheduleJob({ hour: 23, minute: 40 }, function() {
  dbType = cloudant.db.use(cloudant.DBNamePreJob);
  prodAndPreDelete(dbType);
});

function prodAndPreDelete(dbType) {
	var blogNames = [];
	dbType.get('allBlogs', function(err, allBlogsBody) {
    if (err) {
        console.log("Error in getting 'allBlogs' details(names) for doc status change.");
    } else {
        for (var i = 0; i < allBlogsBody.blogs.length; i++) {
			blogNames.push(allBlogsBody.blogs[i].name);
        }
		dbType.view('blogs', 'blogsName', function(err, body) {
			if (err) {
				console.error(err);
			} else {
				if (body != '' && body.rows != undefined && body.rows.length != 0) {		  
					for (var i = 0; i < body.rows.length; i++) {
						if(blogNames.indexOf(body.rows[i].value)==-1){
							dbType.get(body.rows[i].value, function(err, blogBody) {
							if (err) {
								console.log("Error in getting blog details.");
							} else {
								blogBody.blogStatus = 'deleted';
								dbType.insert(blogBody, function(error, blogData) {
									if (error) {
										console.error("Error while updating blog status");
									} else {
										console.log("The blog status updated");
									};
								});
							}
							});
							
						}
					}
				};
			};
		});
	}	
    }); 
};

var day = '';
var prodDocUpdateJob = schedule.scheduleJob({ hour: 23, minute: 0 }, function() {
  var envType = "prd";
  dbType = cloudant.db.use(cloudant.DBNamePrdJob);
  prodAndPreBlogs(envType, dbType);
});

var preDocUpdateJob = schedule.scheduleJob({ hour: 16, minute: 51 }, function() {
  var envType = "pre";
  dbType = cloudant.db.use(cloudant.DBNamePreJob);
  prodAndPreBlogs(envType, dbType);
});

function prodAndPreBlogs(envType, dbType) {
  day = new Date().getTime();
  request({
    url: 'https://admin.blogs.' + envType + '.ibm.event.ibm.com/blogs/eiBlogList.json',
    method: 'GET',
    dataType: "json",
  }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      try {
        var allBlogsNames = JSON.parse(body);
        dbType.get('allBlogs', function(err, allBlogsBody) {
          if (err) {
            console.log("Error in getting 'allBlogs' details(names)");
          } else {
            allBlogsBody.blogs = allBlogsNames;
            dbType.insert(allBlogsBody, function(error, allBlogsData) {
              if (error) {
                console.error("Error while updating 'allblogs' details(name).");
              } else {
                console.log("The 'allBlogs' details (name) updated.");
              };
            });
          }
        });

        for (i = 0; i < allBlogsNames.length; i++) {
          eachBlog(allBlogsNames[i].name, envType, dbType);
        }
      } catch (e) {
        console.log("Error in processing 'allBlogs' details (name).");
      }
    } else {
      console.log("Error in getting 'allBlogs' details.");
      console.error(error);
    }
  });
};

function eachBlog(blogName, envType, dbType) {
  if(envType == 'pre'){
	var options = {
		url: 'https://admin.blogs.' + envType + '.ibm.event.ibm.com/blogs/blogreport/'+blogName+'.json',
		auth: {
		user: "blogdashboard",
		password: "NNZQVhLZ6jouqBZfCiNW7jIGlz3Fki"
		},
		method: 'GET',
		dataType: "json",
	}
  } else {
	var options = {
		url: 'https://admin.blogs.' + envType + '.ibm.event.ibm.com/blogs/blogreport/'+blogName+'.json',
		method: 'GET',
		dataType: "json",
	}  
  }
  request(options, function(error, response, result) {
    if (!error && response.statusCode == 200) {
      if (result != '') {
        try {
          var parsedResult = JSON.parse(result);
          var nameOfBlog = parsedResult.blog["1_name"]
          dbType.get(blogName, function(err, body2) {
            if (err) {
              console.error("Type of Error is : " + err + " for blog - " + blogName);
              if (parsedResult.blog != undefined && parsedResult.blog != '') {
                var doc = {
                  _id: nameOfBlog,
                  blogType: "blogDetails",
                  updateDate: day,
				  blogStatus: 'live',
                  blog: parsedResult.blog
                };
                dbType.insert(doc, function(error, data) {
                  if (error) {
                    console.error("Error while inserting blog details for - " + nameOfBlog);
                  } else {
                    console.log("Blog details inserted for - " + nameOfBlog);
                  };
                });
              }
            } else {
              if (parsedResult.blog != undefined) {
                body2.updateDate = day;
				body2.blogStatus = 'live';
                body2.blog = parsedResult.blog;
                dbType.insert(body2, function(error, data) {
                  if (error) {
                    console.error("Error while updating blog details for - " + nameOfBlog);
                  } else {
                    console.log("Blog details updated for - " + body2._id);
                  };
                });
              }
            };
          });

        } catch (e) {
          console.log("Error in processing : " + blogName);
        }
      } else {
        console.log("Empty result for the blog - " + blogName);
		updateStatus(dbType, blogName);
      }

    } else {
      console.log("Error in getting details of blog - " + blogName);
      console.error(error);
	  updateStatus(dbType, blogName);
    }
  });
};

function updateStatus(dbType, blogName){
	dbType.get(blogName, function(err, body) {
		if (err) {
			console.log("Error in getting blog details for status update.");
		} else {
			body.blogStatus = 'deleted',
			dbType.insert(body, function(error, data) {
                  if (error) {
                    console.error("Error while updating status for - " + blogName);
                  } else {
                    console.log("Status updated for - " + blogName);
                  };
                });
		}
		
	});
};

var prodWeeklyHistoryData = schedule.scheduleJob({ hour: 23, minute: 15, dayOfWeek: 0 }, function() {
  dbType = cloudant.db.use(cloudant.DBNamePrdJob);
  var envType = "Prod";
  prodAndPreWeeklyHistoryData(dbType, envType);
});

var preWeeklyHistoryData = schedule.scheduleJob({ hour: 23, minute: 20, dayOfWeek: 0 }, function() {
  dbType = cloudant.db.use(cloudant.DBNamePreJob);
  var envType = "Pre";
  prodAndPreWeeklyHistoryData(dbType, envType);
});


function prodAndPreWeeklyHistoryData(dbType, envType) {
  dbType.view('blogs', 'dashBoardCards', function(err, body) {
    if (err) {
      console.error("Error in fetching getDataForHistory" + err);
    } else {
      var blogs = body;
      var count = blogs.total_rows;
      var standThe = 0,
        postCount = 0,
        nowTime = new Date(),
        disDayList = [],
        totalCount = 0,
        activeCount1 = 0,
        userList = [],
        pageCount = 0,
        day = new Date().getTime(),
        totalDay = 0;
      var nowDate = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate(), 0, 0, 0);
      var disTime = nowDate.getTime();
      var blogCount = blogs.rows.length;
	  var standThe = 0;
	  var activeCount = 0;
      for (i in blogs.rows) {
        var themes = blogs.rows[i].value.themeDetails,
          posts = blogs.rows[i].value.postDate,
          mostCurDate = '',
          plugins = blogs.rows[i].value.pluginDetails,
          users = blogs.rows[i].value.users;
		  
		  standThe = standThe + blogs.rows[i].value.standThe;
		  activeCount = activeCount + blogs.rows[i].value.activeCount;
		  

		var result = calTime(blogs.rows[i].value.mostCurDate, disTime);
		if (result != -1) {
        disDayList.push(result);
		}
		
		postCount = postCount + blogs.rows[i].value.count;
		
		totalCount = totalCount + blogs.rows[i].value.pluginTotalCount;
		activeCount1 = activeCount1 + blogs.rows[i].value.pluginActiveCount;
		
        for (j in users) {
          if (userList.indexOf(users[j].usersEmail) === -1) {
            userList.push(users[j].usersEmail);
          } else {
            continue;
          }
        }
        pageCount += blogs.rows[i].value.pageCount;
      };

      var stdCurrent = getPercent(standThe, activeCount);
      for (i in disDayList) {
        totalDay += disDayList[i];
      }
      var result = totalDay / disDayList.length + '';
      result = result.substr(0, result.indexOf('.'));
      var plugins = getPercent(activeCount1, totalCount)
      var pagesValue = getPercent2(pageCount, blogCount);
	  
      var doc = {
        _id: "week_" + envType + "_" + dateFormat(nowTime, "dd_mm_yyyy"),
        type: "weekly" + envType + "History",
        envType: envType,
        date: day,
        totalBlogs: count,
        stdCurrentThemes: stdCurrent,
        avgMostCurrentPostAgeDays: result,
        postsNewInLastFullWeek: postCount,
        approvedPlugins: plugins,
        usersCount: userList.length,
        avgPagesLivePerBlog: pagesValue
      };
      dbType.insert(doc, function(error, data) {
        if (error) {
          console.error("Error while inserting weekly history details");
        } else {
          console.log(envType + " Weekly history details inserted " + nowTime);
        };
      });
    };
  });
};

function getPercent(num1, num2) {
  var result = (num1 / num2) * 100 + '';
  if (result.indexOf('.') !== -1) {
    result = result.substr(0, result.indexOf('.'));
  }
  if (result === '') {
    return '0%';
  } else {
    return result + '%';
  }
}


function calTime(date, disTime) {
  var dateC = getTimeToDate(date);
  if (dateC) {
    var dayCount = (disTime - dateC) / (1000 * 60 * 60 * 24);
    return dayCount;
  } else {
    return -1;
  }
}

function getTimeToDate(date) {
  var dateC = date.match(/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
  if (dateC) {
    var dateC = new Date(parseInt(dateC[1], 10),
      parseInt(dateC[2], 10) - 1,
      parseInt(dateC[3], 10), 0, 0, 0);
    return dateC.getTime();
  } else {
    return undefined;
  }
}

function getPercent2(num1, num2) {
  var result = (num1 / num2) + '';
  if (result.indexOf('.') !== -1) {
    result = result.substr(0, result.indexOf('.'));
  }
  if (result === '') {
    return '0';
  } else {
    return result;
  }
}

module.exports = router;
