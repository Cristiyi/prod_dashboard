const CurrentVersion = {
  // Current = ibmNorthstar 1.7 or higher (1.7.1 etc)   or ibmNorthstarDev 1.6.152 or higher (1.6.153…)
  version1: {
    themeName: "ibmNorthstar",
    version: "1.7"
  },
  version2: {
    themeName: "ibmNorthstarDev",
    version: "1.6.152"
  }
};
var blogs = [];
var blogData = {};
var themeData = {};
var pluginData = {};
var userData = [];
var pageData = {};
var googleResults = null;
var currentVersion = 'prod';
var startStyle = '.6s linear 0s normal none infinite ibm-spinner-kf-spin,5.6s ease-in-out 0s normal none infinite ibm-spinner-kf-colors';
var stopStyle = '.0s linear 0s normal none infinite ibm-spinner-kf-spin,5.6s ease-in-out 0s normal none infinite ibm-spinner-kf-colors';
var clipboard = new Clipboard('.copyAddressBtn');

clipboard.on('success', function(e) {
  $('.copyAddressBtn').text('Copied!');
});


jQuery(function($) {
  reset();
  dashBoardRun();

  $('.card').click(function() {
    $('.card').hide();
    $('#table').show();
    $('#tableDiv').addClass(this.id);
    $('.ibm-highlight').removeClass('ibm-highlight');
    switch (this.id) {
      case 'card1':
        {
          calTable1();
          $('#tableDiv').addClass('card1');
          $('.ibm-sitenav-menu-list>ul>li:nth-child(2)').addClass('ibm-highlight');
          break;
        }
      case 'card2':
        {
          calTable2();
          $('#tableDiv').addClass('card2');
          $('.ibm-sitenav-menu-list>ul>li:nth-child(3)').addClass('ibm-highlight');
          break;
        }
      case 'card3':
        {
          calTable3();
          $('#tableDiv').addClass('card3');
          break;
        }
      case 'card4':
        {
          calTable4();
          $('#tableDiv').addClass('card4');
          $('.ibm-sitenav-menu-list>ul>li:nth-child(4)').addClass('ibm-highlight');
          break;
        }
      case 'card5':
        {
          calTable5();
          $('#tableDiv').addClass('card5');
          $('.ibm-sitenav-menu-list>ul>li:nth-child(6)').addClass('ibm-highlight');
          $('.ibm-sitenav-menu-list>ul>li:nth-child(6)>ul>li:first-child').addClass('ibm-highlight');
          break;
        }
      case 'card6':
        {
          calTable6();
          $('#tableDiv').addClass('card6');
          $('.ibm-sitenav-menu-list>ul>li:nth-child(7)').addClass('ibm-highlight');
          $('.ibm-sitenav-menu-list>ul>li:nth-child(7)>ul>li:first-child').addClass('ibm-highlight');
          break;
        }
      case 'card7':
        {
          calTable7();
          $('#tableDiv').addClass('card7');
          $('.ibm-sitenav-menu-list>ul>li:nth-child(5)').addClass('ibm-highlight');
          $('.ibm-sitenav-menu-list>ul>li:nth-child(5)>ul>li:first-child').addClass('ibm-highlight');
          break;
        }
    }
  })

  $('.ibm-sitenav-menu-container ul[role="menubar"] > li a').click(function(event) {
    $('.ibm-highlight').removeClass('ibm-highlight');
    var target = $(event.target);
    var ancestor = target.parent().parent();
    target.parent().addClass('ibm-highlight');
    if (ancestor.attr('role') == 'menu') {
      ancestor.parent().addClass('ibm-highlight');
    }
    var tableDiv = $('#tableDiv');
    var tarName = target.text();
    $('.card').hide();
    $('.tableDivChild').hide();
    $('#table').show();
    if (tableDiv.hasClass('card1')) {
      $('#table1').hide();
      tableDiv.removeClass('card1');
    } else if (tableDiv.hasClass('card2')) {
      $('#table2').hide();
      tableDiv.removeClass('card2');
    } else if (tableDiv.hasClass('card3')) {
      $('#table3').hide();
      tableDiv.removeClass('card3');
    } else if (tableDiv.hasClass('card4')) {
      $('#table4').hide();
      tableDiv.removeClass('card4');
    } else if (tableDiv.hasClass('card5')) {
      $('#table5').hide();
      tableDiv.removeClass('card5');
    } else if (tableDiv.hasClass('card6')) {
      $('#table6').hide();
      tableDiv.removeClass('card6');
    } else if (tableDiv.hasClass('card7')) {
      $('#table7').hide();
      tableDiv.removeClass('card7');
    } else if (tableDiv.hasClass('card8')) {
      $('#table8').hide();
      tableDiv.removeClass('card8');
    } else if (tableDiv.hasClass('card9')) {
      $('#table9').hide();
      tableDiv.removeClass('card9');
    } else if (tableDiv.hasClass('card10')) {
      $('#table10').hide();
      tableDiv.removeClass('card10');
    }

    switch (tarName) {
      case 'Overview':
        {
          $('.card').show();
          $('#table').hide();
          break;
        }
      case 'Blogs':
        {
          $('#tableDiv').addClass('card1');
          calTable1();
          break;
        }
      case 'Themes':
        {
          $('#tableDiv').addClass('card2');
          calTable2();
          break;
        }
      case 'Posts':
        {
          $('#tableDiv').addClass('card4');
          calTable4();
          break;
        }
      case 'By Plug-in':
        {
          $('#tableDiv').addClass('card9');
          calTable9();
          break;
        }
      case 'By Page':
        {
          $('#tableDiv').addClass('card10');
          calTable10();
          break;
        }
      case 'By User':
        {
          $('#tableDiv').addClass('card8');
          calTable8();
          break;
        }
      case 'By Blog':
        {
          if (target.attr('data-cate') == 'page') {
            $('#tableDiv').addClass('card7');
            calTable7();
          } else if (target.attr('data-cate') == 'plugin') {
            $('#tableDiv').addClass('card5');
            calTable5();
          } else if (target.attr('data-cate') == 'user') {
            $('#tableDiv').addClass('card6');
            calTable6();
          }
          break;
        }
    }
    return false;
  })

  $('#switchVersion').on("change", function() {
    reset();
    currentVersion = $('#switchVersion').val();
    dashBoardRun();
  });

  $('p.toggleFilter button').click(function() {
    if ($(this).hasClass('showFilter')) {
      $(this).removeClass('showFilter');
      $(this).addClass('hideFilter');
      $(this).text('Hide/reset filters');

      for (i in $('.tableDivChild')) {
        if ($.contains($('.tableDivChild')[i], this)) {
          $($('.tableDivChild')[i]).addClass('showThisTableFilter')
          break;
        }
      }
    } else if ($(this).hasClass('hideFilter')) {
      $(this).removeClass('hideFilter');
      $(this).addClass('showFilter');
      $(this).text('Show filters');
      var thisID = '';
      for (i in $('.showThisTableFilter')) {
        if ($.contains($('.showThisTableFilter')[i], this)) {
          thisID = $($('.showThisTableFilter')[i]).attr('id');
          $($('.showThisTableFilter')[i]).removeClass('showThisTableFilter')
          break;
        }
      }
      if (thisID === 'table1') {
        setTimeout(resetTable1Filters(), 500);
      } else if (thisID === 'table2') {
        setTimeout(resetTable2Filters(), 500);
      } else if (thisID === 'table5') {
        setTimeout(resetTable5Filters(), 500);
      } else if (thisID === 'table7') {
        setTimeout(resetTable7Filters(), 500);
      } else if (thisID === 'table8') {
        setTimeout(resetTable8Filters(), 500);
      }
    }
  })

  $('a.showUserDetailOverlay').click(function() {
    IBMCore.common.widget.overlay.show('userDetailOverlay');
  })

  $('.filter').on('change', function(event) {
    var classes = $(event.target).attr('class');
    if (classes.indexOf('table1Filter') !== -1) {
      if (blogData.rows != undefined) {
        updateTable1();
      }
    } else if (classes.indexOf('table2Filter') !== -1) {
      if (themeData.rows != undefined) {
        updateTable2();
      }
    } else if (classes.indexOf('table5Filter') !== -1) {
      if (pluginData.rows != undefined) {
        updateTable5();
      }
    } else if (classes.indexOf('table7Filter') !== -1) {
      if (pageData.rows != undefined) {
        updateTable7();
      }
    } else if (classes.indexOf('table8Filter') !== -1) {
      if (userData.rows != undefined) {
        updateTable8();
      }
    }
  })

  $('#moreInfoDiv').hover(function() {}, function() {
    $('#moreInfoDiv').hide();
    $('.showBlogMenu').removeClass('showBlogMenu');
  })

  $('#emailUsersPopup').hover(function() {}, function() {
    $('#emailUsersPopup').hide();
  })

  $('.emailUsers button').click(function() {
    if (!$(this).hasClass('disabled')) {
      var top = $(this).offset().top;
      var left = $(this).offset().left;
      $('#emailUsersPopup').css({
        top: top + 18,
        left: left - 10
      });
      $('#emailUsersPopup').show();
    }
  })

  $('input:radio[name="allorspe"]').change(function() {
    if ($('#speRolesPopup').prop('checked')) {
      $('#speRolesPopupGroup').show();
    } else {
      $('#speRolesPopupGroup').hide();
    }
  });

  $('#moreInfoDiv p:nth-child(3) a').click(function() {
    var blogname = $(this).attr('blogname');
    $('#rawData').show();
    $('#jsonContent').show();
    $('#jsonContent #loading').show();
    $('#jsonContentTitle p:nth-child(1)').text(blogname);
    $('body').css("overflow", "hidden");
    $.ajax({
      url: "/blogName/" + blogname,
      success: function(result) {
        if (result.blog != undefined) {
          $('#jsonContent #loading').hide();
          var formatter = new JSONFormatter(result.blog);
          document.getElementById('jsonRawDataArea').appendChild(formatter.render());
        }
      }
    });
  });

  $('#sendUserEmailBtn').click(function() {
    var addressStr = $('#copyUserEmailBtn').attr('data-clipboard-text');
    window.open('mailto:' + addressStr);
  })

  $('#jsonContentTitle p.ibm-icononly a.ibm-close-link').click(function() {
    $('#rawData').hide();
    $('#jsonContent').hide();
    $('body').css("overflow", "auto");
    $('#jsonContent div.json-formatter-row').remove();
  })
  $('#rawData').click(function() {
    $('#rawData').hide();
    $('#jsonContent').hide();
    $('body').css("overflow", "auto");
    $('#jsonContent div.json-formatter-row').remove();
  })

  $('#loadingMockupSpinner p.ibm-ind-link a').click(function() {
    reset();
    dashBoardRun();
  });

  // 1st Card
  function calBlogCount() {
    var count = blogs.total_rows;
    $('#card1 .cardValue').text(count + ' blogs');
  }

  // 2nd Card
  function calStaThe() {
    var standThe = 0;
    var activeCount = 0;
    var currentTime;
    for (i in blogs.rows) {
      standThe = standThe + blogs.rows[i].value.standThe;
      activeCount = activeCount + blogs.rows[i].value.activeCount;
      if (i == blogs.rows.length - 1) {
        currentTime = blogs.rows[i].value.reportDate;
        var list = currentTime.split(' ');
        if (list.length === 6) {
          var month = list[1];
          var day = list[2];
          var time = list[3];
          var zone = list[4];
          var year = list[5];
          var dateTime = day + " " + month + " " + year + " " + time.slice(0, 5) + " " + zone;
          $('#currentTime span:nth-child(2)').text(dateTime);
        } else {
          $('#currentTime span:nth-child(2)').text(currentTime);
        }
      }
    };
    $('#card2 .cardValue').text(getPercent(standThe, activeCount) + ' themes');
  }

  // 3rd Card
  function calCurDay() {
    var nowTime = new Date();
    var nowDate = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate(), 0, 0, 0);
    var disTime = nowDate.getTime();
    var disDayList = [];
    for (i in blogs.rows) {
      var result = calTime(blogs.rows[i].value.mostCurDate, disTime);
      if (result != -1) {
        disDayList.push(result);
      }
    };
    var totalDay = 0;
    for (i in disDayList) {
      totalDay += disDayList[i];
    }
    var result = totalDay / disDayList.length + '';
    if (result.indexOf('.') != -1) {
      result = result.substr(0, result.indexOf('.'))
    }
    $('#card3 .cardValue').text(result + ' days');
  }

  // 4th Card
  function calPost() {
    var count = 0;
    for (i in blogs.rows) {
      count = count + blogs.rows[i].value.count;
    };

    $('#card4 .cardValue').text(count + ' posts');
  }

  // 5th Card
  function calPlugin() {
    var totalCount = 0;
    var activeCount = 0;
    for (i in blogs.rows) {
      totalCount = totalCount + blogs.rows[i].value.pluginTotalCount;
      activeCount = activeCount + blogs.rows[i].value.pluginActiveCount;
    }
    $('#card5 .cardValue').text(getPercent(activeCount, totalCount) + ' plug-ins');
  }
  // 6th Card
  function calAuthor() {
    var userList = [];
    for (i in blogs.rows) {
      var users = blogs.rows[i].value.users;
      for (j in users) {
        if (userList.indexOf(users[j].usersEmail) === -1) {
          userList.push(users[j].usersEmail);
        } else {
          continue;
        }
      }
    };
    $('#card6 .cardValue').text(formatNumber(userList.length) + ' users');
  }

  // 7th Card
  function calPages() {
    var pageCount = 0;
    var blogCount = blogs.rows.length;
    for (i in blogs.rows) {
      pageCount += blogs.rows[i].value.pageCount;
    }
    $('#card7 .cardValue').text(getPercent2(pageCount, blogCount) + ' pages')
  }

  function calUsers() {
    $('#card8 .cardValue').text("Users");
  }

  // 1st Table
  function calTable1() {
    $('#table1').hide();
    $('#tableLoading').show();
    $('#table h2').text('Details: Blogs');
    if (blogData.rows != undefined) {
      updateTable1();
      console.log('blogDetails', blogData);
      if ($('#tableDiv').hasClass('card1')) {
        $('#table1').show();
        $('#table1 table').DataTable().search('').draw();
        $('#tableLoading').hide();
      }
    } else {
      $.ajax({
        url: '/blogDetails?version=' + currentVersion,
        success: function(result) {
          blogData = result;
          console.log('blogDetails', result);
          updateFilter1();
          updateTable1();
          if ($('#tableDiv').hasClass('card1')) {
            $('#table1').show();
            $('#table1 table').DataTable().search('').draw();
            $('#tableLoading').hide();
          }
        },
        error: function(error) {
          console.error('blogDetails Error', error);
          blogData = {};
        }
      })
    }

    function updateFilter1() {
      var counList = [];
      var languList = [];
      for (i in blogData.rows) {
        var blog = blogData.rows[i].value;
        if (!blog.country || !blog.language) {
          continue;
        }
        if (counList.indexOf(blog.country) === -1) {
          counList.push(blog.country);
        }
        if (languList.indexOf(blog.language) === -1) {
          languList.push(blog.language);
        }
      }
      counList.sort();
      languList.sort();
      for (i in counList) {
        $('#table1Filter1').append('<option value=' + counList[i] + '>' + counList[i] + '</option>');
      }

      for (i in languList) {
        $('#table1Filter2').append('<option value=' + languList[i] + '>' + languList[i] + '</option>');
      }
    }
  }

  function updateTable1() {
    var filterCountry = $('#table1Filter1').val();
    var filterLanguage = $('#table1Filter2').val();
    $('#table1 table').DataTable().destroy();
    $('#table1 table tbody').remove();
    var tr = '<tbody>';
    for (i in blogData.rows) {
      var blog = blogData.rows[i].value;
      if (filterCountry !== 'all' && blog.country !== filterCountry) {
        continue;
      }
      if (filterLanguage !== 'all' && blog.language !== filterLanguage) {
        continue;
      }
      var owner = blog.owner == undefined ? '' : blog.owner;
      var country = blog.country == undefined ? '' : blog.country;
      var language = blog.language == undefined ? '' : blog.language;
      var mu = blog.mu == undefined ? '' : blog.mu;
      var oldPost = getTimeToTime(blog.oldPost);
      var newPost = getTimeToTime(blog.newPost);
      tr += '<tr><td></td><td><span>' + blog.blogName + '</span><a class="jumpLink"><img src="./images/menu.svg" alt="Blogs" /></a></td><td>' + formatNumber(blog.totalPosts) + '</td><td>' + formatNumber(blog.halfYearCount) + '</td><td>' + getTimeToDate2(oldPost) + '</td><td>' + getTimeToDate2(newPost) + '</td><td>' + (googleResults[blog.blogName] === undefined ? "" : googleResults[blog.blogName]) + '</td><td><a title="' + owner + '" href="mailto:' + owner + '"">' + owner + '</a></td><td>' + ((country === "" && language === "") ? "" : (country + '/' + language)) + '</td><td>' + mu + '</td><td></td></tr>';
    }
    $('#table1 table').append(tr + '</tbody>');
    $('#table1 tbody tr td:nth-child(2)').click(function() {
      $(this).addClass('showBlogMenu');
      var name = $(this).parent().children()[1].innerText;
      var top = $(this).offset().top;
      var left = $(this).offset().left;
      blogMenu(name, top, left);
    });

    var table = $('#table1 table').DataTable({
      "scrollY": '51vh',
      "scrollX": false,
      "iDisplayLength": 25,
      "columnDefs": [
        { type: 'date-dd-mmm-yyyy', targets: 4 },
        { type: 'date-dd-mmm-yyyy', targets: 5 }, {
          orderable: false,
          className: 'select-checkbox',
          targets: 0
        }
      ],
      select: {
        style: 'multi+shift',
        selector: 'td:first-child'
      },
      order: [
        [1, 'asc']
      ]
    });

    table.on('select', function(e, dt, type, indexes) {
      selectRows();
    }).on('deselect', function(e, dt, type, indexes) {
      selectRows();
    });

    var blogNames = [];
    var addressStr = '';

    function selectRows() {
      resetEmailUsersPopup();
      blogNames = [];
      addressStr = '';
      var totalCount = 0;
      var authorCount = 0;
      var subCount = 0;
      var conCount = 0;
      var siteCount = 0;
      var adminCount = 0;
      if (table.rows({ selected: false }).count() == 0) {
        $('#table1 table input.selectAll').prop('checked', true);
      } else {
        $('#table1 table input.selectAll').prop('checked', false);
      }

      if (table.rows({ selected: true }).count() == 0) {
        $('#table1 p.emailUsers button').addClass('disabled');
      } else {
        $('#table1 p.emailUsers button').removeClass('disabled');
      }

      for (var i in table.rows({ selected: true }).data().toArray()) {
        var rows = table.rows({ selected: true }).data().toArray()[i];
        var blogName = rows[1].substr(6, rows[1].indexOf('</span>') - 6);
        blogNames.push(blogName)
      }

      if (blogNames.length > 0) {
        for (var i in userData.rows) {
          var blog = userData.rows[i];
          if (blogNames.indexOf(blog.id) == -1) {
            continue;
          }
          totalCount += blog.value.totalCount;
          authorCount += blog.value.authorCount;
          conCount += blog.value.conCount;
          siteCount += blog.value.siteCount;
          subCount += blog.value.subCount;
          adminCount += blog.value.adminCount;
        }
      }

      $("#emailUsersPopup label[for='allRolesPopup']").text("All Roles (" + totalCount + ')');
      $("#emailUsersPopup label[for='authorRolePopup']").text("Authors (" + authorCount + ')');
      $("#emailUsersPopup label[for='subRolePopup']").text("Subscribers (" + subCount + ')');
      $("#emailUsersPopup label[for='conRolePopup']").text("Contributors (" + conCount + ')');
      $("#emailUsersPopup label[for='siteRolePopup']").text("Site Owners (" + siteCount + ')');
      $("#emailUsersPopup label[for='adminRolePopup']").text("Administrators (" + adminCount + ')');

      $("#emailUsersPopup input#authorRolePopup").prop('disabled', (authorCount !== 0) ? false : true);
      $("#emailUsersPopup input#subRolePopup").prop('disabled', (subCount !== 0) ? false : true);
      $("#emailUsersPopup input#conRolePopup").prop('disabled', (conCount !== 0) ? false : true);
      $("#emailUsersPopup input#siteRolePopup").prop('disabled', (siteCount !== 0) ? false : true);
      $("#emailUsersPopup input#adminRolePopup").prop('disabled', (adminCount !== 0) ? false : true);
    }

    $('#emailUsersPopup input[name="allorspe"]').change(function() {
      if ($(this).val() === 'all') {
        $('#sendEmailBtn').prop('disabled', false);
        $('#copyEmailBtn').removeClass('disabled');
      } else if ($('#emailUsersPopup input[name="typeInSpe"]:checked').val() == undefined) {
        $('#sendEmailBtn').prop('disabled', true);
        $('#copyEmailBtn').addClass('disabled');
      } else {
        $('#sendEmailBtn').prop('disabled', false);
        $('#copyEmailBtn').removeClass('disabled');
      }
      calEmails(blogNames);
    })

    $('#emailUsersPopup input[name="typeInSpe"]').change(function() {
      if ($('#emailUsersPopup input[name="typeInSpe"]:checked').val() == undefined) {
        $('#sendEmailBtn').prop('disabled', true);
        $('#copyEmailBtn').addClass('disabled');
      } else {
        $('#sendEmailBtn').prop('disabled', false);
        $('#copyEmailBtn').removeClass('disabled');
      }
      calEmails(blogNames);
    })


    $('#sendEmailBtn').click(function() {
      console.log('addressStr', addressStr)
      window.open('mailto:' + addressStr);
    });

    $('#table1 .emailUsers button').click(function() {
      if (!$(this).hasClass('disabled')) {
        $('.copyAddressBtn').text('Copy addresses');
        if (addressStr === '') {
          calEmails(blogNames);
        }
      }
    })

    $('#table1 table input.selectAll').on('click', function() {
      if ($(this).prop('checked')) {
        table.rows().select();
      } else {
        table.rows().deselect();
      }
    });
  }

  // 2nd Table
  function calTable2() {
    $('#table2').hide();
    $('#tableLoading').show();
    $('#table h2').text('Details: Themes');
    if (themeData.rows != undefined) {
      updateTable2();
      console.log('themeDetails', themeData);
      if ($('#tableDiv').hasClass('card2')) {
        $('#table2').show();
        $('#table2 table').DataTable().search('').draw();
        $('#tableLoading').hide();
      }
    } else {
      $.ajax({
        url: '/themeDetails?version=' + currentVersion,
        success: function(result) {
          themeData = result;
          console.log('themeDetails', result);
          updateFilter2();
          updateTable2();
          if ($('#tableDiv').hasClass('card2')) {
            $('#table2').show();
            $('#table2 table').DataTable().search('').draw();
            $('#tableLoading').hide();
          }
        },
        error: function(error) {
          themeData = {};
          console.error('themeDetails Error', error);
          $('#tableLoading').hide();
        }
      })
    }

    function updateFilter2() {
      var themeList = [];
      var versionList = [];
      for (i in themeData.rows) {
        var themes = themeData.rows[i].value.themeDetails;
        var blogName = themeData.rows[i].value.blogName;
        for (j in themes) {
          var theme = themes[j];
          if (themeList.indexOf(theme.themeName) === -1) {
            themeList.push(theme.themeName);
          }
          if (versionList.indexOf(theme.themeVersion) === -1) {
            versionList.push(theme.themeVersion);
          }
        }
      }
      themeList.sort();
      versionList.sort(function(a, b) {
        return compareVersion(a, b)
      });
      for (i in themeList) {
        $('#table2Filter1').append('<option value=' + themeList[i] + '>' + themeList[i] + '</option>');
      }

      for (i in versionList) {
        $('#table2Filter2').append('<option value=' + versionList[i] + '>' + versionList[i] + '</option>');
      }
    }
  }

  function updateTable2() {
    var OpTheme = $('#table2FilterOp1').val();
    var filterTheme = $('#table2Filter1').val();
    var OpVersion = $('#table2FilterOp2').val();
    var filterVersion = $('#table2Filter2').val();
    var filterActive = $('#table2Filter3').val();

    $('#table2 table').DataTable().destroy();
    $('#table2 table tbody').remove();
    var rImg = '<img src="./images/icon-green.png" class="right"><span class="yesorno"> Yes</span>';
    var wImg = '<img src="./images/icon-red.png" class="wrong"><span class="yesorno"> No</span>';
    var totalCount = 0;
    var standCount = 0;
    var currentCount = 0;
    var activeCount = 0;
    var bothCount = 0;
    var tr = '<tbody>';
    for (i in themeData.rows) {
      var themes = themeData.rows[i].value.themeDetails;
      var blogName = themeData.rows[i].value.blogName;
      for (j in themes) {
        var theme = themes[j];
        if (OpTheme == 'equal' && filterTheme !== 'all' && theme.themeName !== filterTheme) {
          continue;
        } else if (OpTheme != 'equal' && filterTheme == 'all') {
          continue;
        } else if (OpTheme != 'equal' && filterTheme != 'all' && theme.themeName == filterTheme) {
          continue;
        }

        if (OpVersion == 'equal' && filterVersion !== 'all' && compareVersion(theme.themeVersion, filterVersion) != 0) {
          continue;
        } else if (OpVersion != 'equal' && filterVersion == 'all') {
          continue;
        } else if (OpVersion == 'notequal' && compareVersion(theme.themeVersion, filterVersion) == 0) {
          continue;
        } else if (OpVersion == 'more' && filterVersion !== 'all' && compareVersion(theme.themeVersion, filterVersion) == -1) {
          continue;
        } else if (OpVersion == 'less' && filterVersion !== 'all' && compareVersion(theme.themeVersion, filterVersion) == 1) {
          continue;
        }
        if (filterActive !== 'all' && theme.status !== filterActive) {
          continue;
        }
        totalCount++;
        var ifStardard = false;
        var ifCurrent = false;
        var ifActive = false;
        if (theme.themeName === 'ibmNorthstar' || theme.themeName === 'ibmNorthstarLST') {
          ifStardard = true;
          standCount++;
        }
        if (judgeIfCurrent(theme.themeName, theme.themeVersion) == 1) {
          ifCurrent = true;
          currentCount++;
        }
        if (theme.status === 'active') {
          ifActive = true;
          activeCount++;
        }
        if (ifStardard && ifCurrent) {
          bothCount++;
        }
        tr += '<tr><td></td><td><span>' + blogName + '</span><a class="jumpLink"><img src="./images/menu.svg" alt="Blogs" /></a></td><td>' + theme.themeName + '</td><td>' + theme.themeVersion + '</td><td>' + (ifActive ? rImg : wImg) + '</td><td>' + (ifStardard ? rImg : wImg) + '</td><td>' + (ifCurrent ? rImg : wImg) + '</td><td>' + (ifStardard && ifCurrent ? rImg : wImg) + '</td></tr>';
      }
    }
    $('#table2 table').append(tr + '</tbody>');

    var total = '<tbody><tr><td></td><td>Total = ' + formatNumber(totalCount) + '</td><td></td><td></td><td>' + formatNumber(activeCount) + '</td><td>' + formatNumber(standCount) + '</td><td>' + formatNumber(currentCount) + '</td><td>' + formatNumber(bothCount) + '</td></tr><tr><td></td><td>% of overall total</td><td></td><td></td><td>' + getPercent(activeCount, totalCount) + '</td><td>' + getPercent(standCount, totalCount) + '</td><td>' + getPercent(currentCount, totalCount) + '</td><td>' + getPercent(bothCount, totalCount) + '</td></tr></tbody>';
    $('#table2 table').append(total);

    $('#table2 tbody tr td:nth-child(2)').click(function() {
      $(this).addClass('showBlogMenu');
      var name = $(this).parent().children()[1].innerText;
      var top = $(this).offset().top;
      var left = $(this).offset().left;
      blogMenu(name, top, left);
    });

    var table = $('#table2 table').DataTable({
      "scrollY": '51vh',
      "scrollX": false,
      "iDisplayLength": 25,
      columnDefs: [{
        orderable: false,
        className: 'select-checkbox',
        targets: 0
      }],
      select: {
        style: 'multi+shift',
        selector: 'td:first-child'
      },
      order: [
        [1, 'asc']
      ]
    });

    table.on('select', function(e, dt, type, indexes) {
      selectRows();
    }).on('deselect', function(e, dt, type, indexes) {
      selectRows();
    });

    var blogNames = [];
    var addressStr = '';

    function selectRows() {
      resetEmailUsersPopup();
      blogNames = [];
      addressStr = '';
      var totalCount = 0;
      var authorCount = 0;
      var subCount = 0;
      var conCount = 0;
      var siteCount = 0;
      var adminCount = 0;
      if (table.rows({ selected: false }).count() == 0) {
        $('#table2 table input.selectAll').prop('checked', true);
      } else {
        $('#table2 table input.selectAll').prop('checked', false);
      }

      if (table.rows({ selected: true }).count() == 0) {
        $('#table2 p.emailUsers button').addClass('disabled');
      } else {
        $('#table2 p.emailUsers button').removeClass('disabled');
      }

      for (var i in table.rows({ selected: true }).data().toArray()) {
        var rows = table.rows({ selected: true }).data().toArray()[i];
        var blogName = rows[1].substr(6, rows[1].indexOf('</span>') - 6);
        blogNames.push(blogName)
      }

      if (blogNames.length > 0) {
        for (var i in userData.rows) {
          var blog = userData.rows[i];
          if (blogNames.indexOf(blog.id) == -1) {
            continue;
          }
          totalCount += blog.value.totalCount;
          authorCount += blog.value.authorCount;
          conCount += blog.value.conCount;
          siteCount += blog.value.siteCount;
          subCount += blog.value.subCount;
          adminCount += blog.value.adminCount;
        }
      }

      $("#emailUsersPopup label[for='allRolesPopup']").text("All Roles (" + totalCount + ')');
      $("#emailUsersPopup label[for='authorRolePopup']").text("Authors (" + authorCount + ')');
      $("#emailUsersPopup label[for='subRolePopup']").text("Subscribers (" + subCount + ')');
      $("#emailUsersPopup label[for='conRolePopup']").text("Contributors (" + conCount + ')');
      $("#emailUsersPopup label[for='siteRolePopup']").text("Site Owners (" + siteCount + ')');
      $("#emailUsersPopup label[for='adminRolePopup']").text("Administrators (" + adminCount + ')');

      $("#emailUsersPopup input#authorRolePopup").prop('disabled', (authorCount !== 0) ? false : true);
      $("#emailUsersPopup input#subRolePopup").prop('disabled', (subCount !== 0) ? false : true);
      $("#emailUsersPopup input#conRolePopup").prop('disabled', (conCount !== 0) ? false : true);
      $("#emailUsersPopup input#siteRolePopup").prop('disabled', (siteCount !== 0) ? false : true);
      $("#emailUsersPopup input#adminRolePopup").prop('disabled', (adminCount !== 0) ? false : true);

    }

    $('#emailUsersPopup input[name="allorspe"]').change(function() {
      if ($(this).val() === 'all') {
        $('#sendEmailBtn').prop('disabled', false);
        $('#copyEmailBtn').removeClass('disabled');
      } else if ($('#emailUsersPopup input[name="typeInSpe"]:checked').val() == undefined) {
        $('#sendEmailBtn').prop('disabled', true);
        $('#copyEmailBtn').addClass('disabled');
      } else {
        $('#sendEmailBtn').prop('disabled', false);
        $('#copyEmailBtn').removeClass('disabled');
      }
      calEmails(blogNames);
    })

    $('#emailUsersPopup input[name="typeInSpe"]').change(function() {
      if ($('#emailUsersPopup input[name="typeInSpe"]:checked').val() == undefined) {
        $('#sendEmailBtn').prop('disabled', true);
        $('#copyEmailBtn').addClass('disabled');
      } else {
        $('#sendEmailBtn').prop('disabled', false);
        $('#copyEmailBtn').removeClass('disabled');
      }
      calEmails(blogNames);
    })


    $('#sendEmailBtn').click(function() {
      console.log('addressStr', addressStr)
      window.open('mailto:' + addressStr);
    });

    $('#table2 .emailUsers button').click(function() {
      if (!$(this).hasClass('disabled')) {
        $('.copyAddressBtn').text('Copy addresses');
        if (addressStr === '') {
          calEmails(blogNames);
        }
      }
    })

    $('#table2 table input.selectAll').on('click', function() {
      if ($(this).prop('checked')) {
        table.rows().select();
      } else {
        table.rows().deselect();
      }
    });
  }

  // 3th Table
  function calTable3() {
    $('#table3').hide();
    $('#tableLoading').show();
    $('#table h2').text('Details: Most current post age');
    if (blogs.rows != undefined) {
      updateTable3();
      console.log('dashBoard', blogs);
      if ($('#tableDiv').hasClass('card3')) {
        $('#table3').show();
        $('#table3 table').DataTable().search('').draw();
        $('#tableLoading').hide();
      }
    }

    function updateTable3() {
      $('#table3 table').DataTable().destroy();
      $('#table3 table tbody').remove();
      var tr = '<tbody>'
      var nowTime = new Date();
      var nowDate = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate(), 0, 0, 0);
      var disTime = nowDate.getTime();
      for (i in blogs.rows) {
        var blogName = blogs.rows[i].value.blogName;
        var result = calTime(blogs.rows[i].value.mostCurDate, disTime);
        tr += '<tr><td>' + blogName + '<a class="jumpLink"><img src="./images/menu.svg" alt="Blogs" /></a></td><td>' + formatNumber(result) + '</td></tr>';

      };
      $('#table3 table').append(tr + '</tbody>');
      $('#table3 tbody tr td:nth-child(1)').click(function() {
        $(this).addClass('showBlogMenu');
        var name = $(this).parent().children()[0].innerText;
        var top = $(this).offset().top;
        var left = $(this).offset().left;
        blogMenu(name, top, left);
      });

      $('#table3 table').DataTable({
        "scrollY": '51vh',
        "scrollX": false,
        "iDisplayLength": 25,
      });
    }
  }

  // 4th Table
  function calTable4() {
    $('#table4').hide();
    $('#tableLoading').show();
    $('#table h2').text('Details: Posts');
    if (blogs.rows != undefined) {
      updateTable4();
      console.log('dashBoard', blogs);
      if ($('#tableDiv').hasClass('card4')) {
        $('#table4').show();
        $('#table4 table').DataTable().search('').draw();
        $('#tableLoading').hide();
      }
    }

    function updateTable4() {
      $('#table4 table').DataTable().destroy();
      $('#table4 table tbody').remove();
      var tr = '<tbody>'
      var total7 = 0;
      var total30 = 0;
      var total90 = 0;
      var totalyear = 0;
      var totalCount = 0;
      var nowTime = new Date();
      var nowDate = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate(), 0, 0, 0);
      var disTime = nowDate.getTime();
      for (i in blogs.rows) {
        var blogName = blogs.rows[i].value.blogName;
        var count7 = 0;
        var count30 = 0;
        var count90 = 0;
        var countyear = 0;
        var counttotal = 0;

        count7 = blogs.rows[i].value.postValue.count7;
        count30 = blogs.rows[i].value.postValue.count30;
        count90 = blogs.rows[i].value.postValue.count90;
        countyear = blogs.rows[i].value.postValue.countyear;
        counttotal = blogs.rows[i].value.postValue.counttotal;

        total7 += count7;
        total30 += count30;
        total90 += count90;
        totalyear += countyear;
        totalCount += counttotal;
        tr += '<tr><td></td><td><span>' + blogName + '</span><a class="jumpLink"><img src="./images/menu.svg" alt="Blogs" /></a></td><td>' + formatNumber(count7) + '</td><td>' + formatNumber(count30) + '</td><td>' + formatNumber(count90) + '</td><td>' + formatNumber(countyear) + '</td><td>' + formatNumber(counttotal) + '</td></tr>';
      };
      $('#table4 table').append(tr + '</tbody>');
      var total = '<tbody><tr></td><td><td>Total</td><td>' + formatNumber(total7) + '</td><td>' + formatNumber(total30) + '</td><td>' + formatNumber(total90) + '</td><td>' + formatNumber(totalyear) + '</td><td>' + formatNumber(totalCount) + '</td></tr></tbody>';
      $('#table4 table').append(total);

      $('#table4 tbody tr td:nth-child(2)').click(function() {
        $(this).addClass('showBlogMenu');
        var name = $(this).parent().children()[0].innerText;
        var top = $(this).offset().top;
        var left = $(this).offset().left;
        blogMenu(name, top, left);
      });

      var table = $('#table4 table').DataTable({
        "iDisplayLength": 25,
        "scrollY": '51vh',
        "scrollX": false,
        "scrollX": false,
        columnDefs: [{
          orderable: false,
          className: 'select-checkbox',
          targets: 0
        }],
        select: {
          style: 'multi+shift',
          selector: 'td:first-child'
        },
        order: [
          [1, 'asc']
        ]
      });

      table.on('select', function(e, dt, type, indexes) {
        selectRows();
      }).on('deselect', function(e, dt, type, indexes) {
        selectRows();
      });

      var blogNames = [];
      var addressStr = '';

      function selectRows() {
        resetEmailUsersPopup();
        blogNames = [];
        addressStr = '';
        var totalCount = 0;
        var authorCount = 0;
        var subCount = 0;
        var conCount = 0;
        var siteCount = 0;
        var adminCount = 0;
        if (table.rows({ selected: false }).count() == 0) {
          $('#table4 table input.selectAll').prop('checked', true);
        } else {
          $('#table4 table input.selectAll').prop('checked', false);
        }

        if (table.rows({ selected: true }).count() == 0) {
          $('#table4 p.emailUsers button').addClass('disabled');
        } else {
          $('#table4 p.emailUsers button').removeClass('disabled');
        }

        for (var i in table.rows({ selected: true }).data().toArray()) {
          var rows = table.rows({ selected: true }).data().toArray()[i];
          var blogName = rows[1].substr(6, rows[1].indexOf('</span>') - 6);
          blogNames.push(blogName)
        }

        if (blogNames.length > 0) {
          for (var i in userData.rows) {
            var blog = userData.rows[i];
            if (blogNames.indexOf(blog.id) == -1) {
              continue;
            }
            totalCount += blog.value.totalCount;
            authorCount += blog.value.authorCount;
            conCount += blog.value.conCount;
            siteCount += blog.value.siteCount;
            subCount += blog.value.subCount;
            adminCount += blog.value.adminCount;
          }
        }

        $("#emailUsersPopup label[for='allRolesPopup']").text("All Roles (" + totalCount + ')');
        $("#emailUsersPopup label[for='authorRolePopup']").text("Authors (" + authorCount + ')');
        $("#emailUsersPopup label[for='subRolePopup']").text("Subscribers (" + subCount + ')');
        $("#emailUsersPopup label[for='conRolePopup']").text("Contributors (" + conCount + ')');
        $("#emailUsersPopup label[for='siteRolePopup']").text("Site Owners (" + siteCount + ')');
        $("#emailUsersPopup label[for='adminRolePopup']").text("Administrators (" + adminCount + ')');

        $("#emailUsersPopup input#authorRolePopup").prop('disabled', (authorCount !== 0) ? false : true);
        $("#emailUsersPopup input#subRolePopup").prop('disabled', (subCount !== 0) ? false : true);
        $("#emailUsersPopup input#conRolePopup").prop('disabled', (conCount !== 0) ? false : true);
        $("#emailUsersPopup input#siteRolePopup").prop('disabled', (siteCount !== 0) ? false : true);
        $("#emailUsersPopup input#adminRolePopup").prop('disabled', (adminCount !== 0) ? false : true);

      }

      $('#emailUsersPopup input[name="allorspe"]').change(function() {
        if ($(this).val() === 'all') {
          $('#sendEmailBtn').prop('disabled', false);
          $('#copyEmailBtn').removeClass('disabled');
        } else if ($('#emailUsersPopup input[name="typeInSpe"]:checked').val() == undefined) {
          $('#sendEmailBtn').prop('disabled', true);
          $('#copyEmailBtn').addClass('disabled');
        } else {
          $('#sendEmailBtn').prop('disabled', false);
          $('#copyEmailBtn').removeClass('disabled');
        }
        calEmails(blogNames);
      })

      $('#emailUsersPopup input[name="typeInSpe"]').change(function() {
        if ($('#emailUsersPopup input[name="typeInSpe"]:checked').val() == undefined) {
          $('#sendEmailBtn').prop('disabled', true);
          $('#copyEmailBtn').addClass('disabled');
        } else {
          $('#sendEmailBtn').prop('disabled', false);
          $('#copyEmailBtn').removeClass('disabled');
        }
        calEmails(blogNames);
      })


      $('#sendEmailBtn').click(function() {
        console.log('addressStr', addressStr)
        window.open('mailto:' + addressStr);
      });

      $('#table4 .emailUsers button').click(function() {
        if (!$(this).hasClass('disabled')) {
          $('.copyAddressBtn').text('Copy addresses');
          if (addressStr === '') {
            calEmails(blogNames);
          }
        }
      })

      $('#table4 table input.selectAll').on('click', function() {
        if ($(this).prop('checked')) {
          table.rows().select();
        } else {
          table.rows().deselect();
        }
      });

    }
  }

  // 5th Table
  function calTable5() {
    $('#table5').hide();
    $('#tableLoading').show();
    $('#table h2').text('Plug-in Details: By Blog');
    if (pluginData.rows != undefined) {
      console.log("pluginDetails", pluginData);
      updateTable5();
      if ($('#tableDiv').hasClass('card5')) {
        $('#table5').show();
        $('#table5 table').DataTable().search('').draw();
        $('#tableLoading').hide();
      }
    } else {
      $.ajax({
        url: '/pluginDetails?version=' + currentVersion,
        success: function(result) {
          $.ajax({
            url: '/plugins?version=' + currentVersion,
            success: function(statusResult) {
              pluginData = result;
              var status = {};
              for (var i in statusResult.rows) {
                var st = statusResult.rows[i];
                status[st.id] = st.value.status;
              }
              for (var i in pluginData.rows) {
                for (var j in pluginData.rows[i].value.pluginDetails) {
                  var plugin = pluginData.rows[i].value.pluginDetails[j];
                  plugin['active'] = plugin.status;
                  plugin.status = status[plugin.pluginName];
                }
              }
              console.log("status", status);
              console.log("pluginDetails", pluginData);
              updateFilter5();
              updateTable5();
              if ($('#tableDiv').hasClass('card5')) {
                $('#table5').show();
                $('#table5 table').DataTable().search('').draw();
                $('#tableLoading').hide();
              }
            },
            error: function(error) {
              pluginData = {};
              console.log("pluginStatus Error", error);
            }
          })
        },
        error: function(error) {
          pluginData = {};
          console.log("pluginDetails Error", error);
        }
      })
    }


    function updateFilter5() {
      var pluginList = [];
      var blogList = [];
      var statusList = [];
      for (i in pluginData.rows) {
        var plugins = pluginData.rows[i].value.pluginDetails;
        var blogName = pluginData.rows[i].value.blogName;
        if (blogList.indexOf(blogName) === -1) {
          blogList.push(blogName);
        }
        for (j in plugins) {
          var plugin = plugins[j];
          if (pluginList.indexOf(plugin.pluginName) === -1) {
            pluginList.push(plugin.pluginName);
          }
          if (plugin.status !== undefined && statusList.indexOf(plugin.status) === -1) {
            statusList.push(plugin.status);
          }
        }
      }
      pluginList.sort();
      blogList.sort();
      statusList.sort();
      for (var i in pluginList) {
        $('#table5Filter1').append('<option value="' + pluginList[i] + '">' + pluginList[i] + '</option>');
      }

      for (var i in blogList) {
        $('#table5Filter2').append('<option value="' + blogList[i] + '">' + blogList[i] + '</option>');
      }
      for (var i in statusList) {
        var str = '<option value="' + statusList[i] + '">' + statusList[i] + '</option>';
        $('#table5Filter4').append(str);
      }
    }
  }

  function updateTable5() {
    var filterPlugin = $('#table5Filter1').val();
    var filterBlog = $('#table5Filter2').val();
    var filterActive = $('#table5Filter3').val();
    var filterStatus = $('#table5Filter4').val();
    var filterApproved = $('#table5Filter5').val();
    $('#table5 table').DataTable().destroy();
    $('#table5 table tbody').remove();
    var tr = '<tbody>';
    var activeCount = 0;
    var approvCount = 0;
    var updateCount = 0;
    var totalCount = 0;
    var rImg = '<img src="./images/icon-green.png" class="right"><span class="yesorno"> Yes</span>';
    var wImg = '<img src="./images/icon-red.png" class="wrong"><span class="yesorno"> No</span>';
    var isActived = false;
    var isApproved = false;
    var isUpdated = false;
    var updateImg = wImg;
    for (i in pluginData.rows) {
      var blogName = pluginData.rows[i].value.blogName;
      var plugins = pluginData.rows[i].value.pluginDetails;
      if (filterBlog !== 'all' && blogName !== filterBlog) {
        continue;
      }
      for (j in plugins) {
        var plugin = plugins[j];
        if (filterPlugin !== 'all' && plugin.pluginName !== filterPlugin) {
          continue;
        }
        if (filterActive !== 'all' && plugin.active !== filterActive) {
          continue;
        }
        if (filterStatus !== 'all' && plugin.status !== filterStatus) {
          continue;
        }
        if (filterApproved === 'approved' && plugin.status !== 'Approved' && plugin.status !== 'Standard') {
          continue;
        }
        if (filterApproved === 'unapproved' && (plugin.status === 'Approved' || plugin.status === 'Standard')) {
          continue;
        }
        totalCount++;
        isActived = false;
        isUpdated = false;
        isApproved = false;
        if (plugin.active === 'active') {
          activeCount++;
          isActived = true;
        }
        if (plugin.status === 'Approved' || plugin.status === 'Standard') {
          approvCount++;
          isApproved = true;
        }
        if (plugin.update === 'available') {
          updateCount++;
          isUpdated = true;
        }
        tr += '<tr><td>' + plugin.pluginName + '</td><td>' + blogName + '</td><td>' + plugin.pluginVersion + '</td><td>' + (isActived ? rImg : wImg) + '</td><td>' + plugin.status + '</td><td>' + (isApproved ? rImg : wImg) + '</td><td>' + (isUpdated ? rImg : wImg) + '</td></tr>';
      };
    }
    $('#table5 table').append(tr + '</tbody>');
    var total = '<tbody><tr><td>Total = ' + formatNumber(totalCount) + '</td><td></td><td></td><td>' + formatNumber(activeCount) + '</td><td></td><td>' + formatNumber(approvCount) + '</td><td>' + formatNumber(updateCount) + '</td></tr><tr><td>% of overall total</td><td></td><td></td><td>' + getPercent(activeCount, totalCount) + '</td><td></td><td>' + getPercent(approvCount, totalCount) + '</td><td>' + getPercent(updateCount, totalCount) + '</td></tr></tbody>';
    $('#table5 table').append(total);
    $('#table5 table').DataTable({
      "iDisplayLength": 25,
      "scrollY": '51vh',
      "scrollX": false
    });
  }

  // 6th Table
  function calTable6() {
    $('#table6').hide();
    $('#tableLoading').show();
    $('#table h2').text('User Details: By Blog');
    if (userData.rows != undefined) {
      updateTable6();
      console.log("userDetails", userData);
      if ($('#tableDiv').hasClass('card6')) {
        $('#table6').show();
        $('#table6 table').DataTable().search('').draw();
        $('#tableLoading').hide();
      }
    }

    function updateTable6() {
      $('#table6 table').DataTable().destroy();
      $('#table6 table tbody').remove();
      var tr = '<tbody>';
      var totalCount = 0;
      var authorCountAll = 0;
      var subCountAll = 0;
      var conCountAll = 0;
      var siteCountAll = 0;
      var adminCountAll = 0;
      for (i in userData.rows) {
        var blogName = userData.rows[i].value.blogName;
        var blog = userData.rows[i].value;
        totalCount += blog.totalCount;
        var authorCount = blog.authorCount;
        var subCount = blog.subCount;
        var conCount = blog.conCount;
        var siteCount = blog.siteCount;
        var adminCount = blog.adminCount;

        authorCountAll += authorCount;
        subCountAll += subCount;
        conCountAll += conCount;
        siteCountAll += siteCount;
        adminCountAll += adminCount;
        tr += '<tr><td></td><td><span>' + blogName + '</span><a class="jumpLink"><img src="./images/menu.svg" alt="Blogs" /></a></td><td><a class="showUserDetailOverlay" href="javascript:">' + formatNumber(authorCount) + '</a></td><td><a class="showUserDetailOverlay" href="javascript:">' + formatNumber(subCount) + '</a></td><td><a class="showUserDetailOverlay" href="javascript:">' + formatNumber(conCount) + '</a></td><td><a class="showUserDetailOverlay" href="javascript:">' + formatNumber(siteCount) + '</a></td><td><a class="showUserDetailOverlay" href="javascript:">' + formatNumber(adminCount) + '</a></td></tr>';
      }
      $('#table6 table').append(tr + '</tbody>');
      var total = '<tbody><tr><td></td><td>Total = ' + formatNumber(totalCount) + '</td><td>' + formatNumber(authorCountAll) + '</td><td>' + formatNumber(subCountAll) + '</td><td>' + formatNumber(conCountAll) + '</td><td>' + formatNumber(siteCountAll) + '</td><td>' + formatNumber(adminCountAll) + '</td></tr></tbody>';
      $('#table6 table').append(total);
      $('#table6 tbody tr td:nth-child(2)').click(function() {
        $(this).addClass('showBlogMenu');
        var name = $(this).parent().children()[1].innerText;
        var top = $(this).offset().top;
        var left = $(this).offset().left;
        blogMenu(name, top, left);
      });

      $('a.showUserDetailOverlay').click(function() {
        var tr = $(this).parent().parent();
        var index = tr.children().index($(this).parent());
        console.log('index', index)
        if (index < 2) {
          return;
        }
        var role = '';
        switch (index) {
          case 2:
            role = 'author';
            break;
          case 3:
            role = 'subscriber';
            break;
          case 4:
            role = 'editor';
            break;
          case 5:
            role = 'site_owner';
            break;
          case 6:
            role = 'administrator';
            break;
          default:
            role = '';
            break;
        }
        var blogName = tr.children('td:nth-child(2)').text();
        var users = [];
        var userResult = [];
        var content = $('#userDetailOverlay div:nth-child(2)');
        content.html('');
        for (var i in userData.rows) {
          if (userData.rows[i].id == blogName) {
            users = userData.rows[i].value.users;
            break;
          }
        }
        for (var j in users) {
          var user = users[j];
          if (user.roles == role) {
            userResult.push(user.userEmail);
            content.append('<div><span>' + user.displayName + '</span><span><a href="javascript:">' + user.userEmail + '</a></span></div>')
          }
        }
        $('#copyUserEmailBtn').text('Copy addresses');
        if (userResult.length == 0) {
          $('#copyUserEmailBtn').attr('data-clipboard-text', '');
          $('#copyUserEmailBtn').prop('disabled', true);
          $('#sendUserEmailBtn').prop('disabled', true);
        } else {
          $('#copyUserEmailBtn').prop('disabled', false);
          $('#sendUserEmailBtn').prop('disabled', false);
          var addressStr = userResult.join(', ');
          $('#copyUserEmailBtn').attr('data-clipboard-text', addressStr);
        }
        $('#userDetailOverlay>h1:nth-child(1)').html($('#table6 thead tr').children(':nth-child(' + (index + 1) + ')').html() + ' (' + userResult.length + ')');
        console.log('content', content)
        IBMCore.common.widget.overlay.show('userDetailOverlay');
      })
      var table = $('#table6 table').DataTable({
        "iDisplayLength": 25,
        "scrollY": '51vh',
        "scrollX": false,
        columnDefs: [{
          orderable: false,
          className: 'select-checkbox',
          targets: 0
        }],
        select: {
          style: 'multi+shift',
          selector: 'td:first-child'
        },
        order: [
          [1, 'asc']
        ]
      });

      table.on('select', function(e, dt, type, indexes) {
        selectRows();
      }).on('deselect', function(e, dt, type, indexes) {
        selectRows();
      });

      var blogNames = [];
      var addressStr = '';

      function selectRows() {
        resetEmailUsersPopup();
        blogNames = [];
        addressStr = '';
        var totalCount = 0;
        var authorCount = 0;
        var subCount = 0;
        var conCount = 0;
        var siteCount = 0;
        var adminCount = 0;
        if (table.rows({ selected: false }).count() == 0) {
          $('#table6 table input.selectAll').prop('checked', true);
        } else {
          $('#table6 table input.selectAll').prop('checked', false);
        }

        if (table.rows({ selected: true }).count() == 0) {
          $('#table6 p.emailUsers button').addClass('disabled');
        } else {
          $('#table6 p.emailUsers button').removeClass('disabled');
        }

        for (var i in table.rows({ selected: true }).data().toArray()) {
          var rows = table.rows({ selected: true }).data().toArray()[i];
          var blogName = rows[1].substr(6, rows[1].indexOf('</span>') - 6);
          blogNames.push(blogName)
        }

        if (blogNames.length > 0) {
          for (var i in userData.rows) {
            var blog = userData.rows[i];
            if (blogNames.indexOf(blog.id) == -1) {
              continue;
            }
            totalCount += blog.value.totalCount;
            authorCount += blog.value.authorCount;
            conCount += blog.value.conCount;
            siteCount += blog.value.siteCount;
            subCount += blog.value.subCount;
            adminCount += blog.value.adminCount;
          }
        }

        $("#emailUsersPopup label[for='allRolesPopup']").text("All Roles (" + totalCount + ')');
        $("#emailUsersPopup label[for='authorRolePopup']").text("Authors (" + authorCount + ')');
        $("#emailUsersPopup label[for='subRolePopup']").text("Subscribers (" + subCount + ')');
        $("#emailUsersPopup label[for='conRolePopup']").text("Contributors (" + conCount + ')');
        $("#emailUsersPopup label[for='siteRolePopup']").text("Site Owners (" + siteCount + ')');
        $("#emailUsersPopup label[for='adminRolePopup']").text("Administrators (" + adminCount + ')');

        $("#emailUsersPopup input#authorRolePopup").prop('disabled', (authorCount !== 0) ? false : true);
        $("#emailUsersPopup input#subRolePopup").prop('disabled', (subCount !== 0) ? false : true);
        $("#emailUsersPopup input#conRolePopup").prop('disabled', (conCount !== 0) ? false : true);
        $("#emailUsersPopup input#siteRolePopup").prop('disabled', (siteCount !== 0) ? false : true);
        $("#emailUsersPopup input#adminRolePopup").prop('disabled', (adminCount !== 0) ? false : true);

      }

      $('#emailUsersPopup input[name="allorspe"]').change(function() {
        if ($(this).val() === 'all') {
          $('#sendEmailBtn').prop('disabled', false);
          $('#copyEmailBtn').removeClass('disabled');
        } else if ($('#emailUsersPopup input[name="typeInSpe"]:checked').val() == undefined) {
          $('#sendEmailBtn').prop('disabled', true);
          $('#copyEmailBtn').addClass('disabled');
        } else {
          $('#sendEmailBtn').prop('disabled', false);
          $('#copyEmailBtn').removeClass('disabled');
        }
        calEmails(blogNames);
      })

      $('#emailUsersPopup input[name="typeInSpe"]').change(function() {
        if ($('#emailUsersPopup input[name="typeInSpe"]:checked').val() == undefined) {
          $('#sendEmailBtn').prop('disabled', true);
          $('#copyEmailBtn').addClass('disabled');
        } else {
          $('#sendEmailBtn').prop('disabled', false);
          $('#copyEmailBtn').removeClass('disabled');
        }
        calEmails(blogNames);
      })


      $('#sendEmailBtn').click(function() {
        console.log('addressStr', addressStr)
        window.open('mailto:' + addressStr);
      });

      $('#table6 .emailUsers button').click(function() {
        if (!$(this).hasClass('disabled')) {
          $('.copyAddressBtn').text('Copy addresses');
          if (addressStr === '') {
            calEmails(blogNames);
          }
        }
      })

      $('#table6 table input.selectAll').on('click', function() {
        if ($(this).prop('checked')) {
          table.rows().select();
        } else {
          table.rows().deselect();
        }
      });

    }
  }

  // 7th Table
  function calTable7() {
    $('#table7').hide();
    $('#tableLoading').show();
    $('#table h2').text('Page Details: By Blog');
    if (pageData.rows != undefined) {
      updateTable7();
      console.log('tableDetails', pageData);
      if ($('#tableDiv').hasClass('card7')) {
        $('#table7').show();
        $('#table7 table').DataTable().search('').draw();
        $('#tableLoading').hide();
      }
    } else {
      $.ajax({
        url: '/pageDetails?version=' + currentVersion,
        success: function(result) {
          pageData = result;
          updateFilter7();
          updateTable7();
          if ($('#tableDiv').hasClass('card7')) {
            $('#table7').show();
            $('#table7 table').DataTable().search('').draw();
            $('#tableLoading').hide();
          }
          console.log('pageDetails', pageData);
        },
        error: function(error) {
          pageData = [];
          console.error('pageDetails Error', error);
        }
      })
    }

    function updateFilter7() {
      var pageList = [];
      var blogList = [];
      var statusList = [];
      for (i in pageData.rows) {
        var pages = pageData.rows[i].value.pageDetails;
        var blogName = pageData.rows[i].value.blogName;
        if (blogList.indexOf(blogName) === -1) {
          blogList.push(blogName)
        }
        for (j in pages) {
          var page = pages[j];
          if (pageList.indexOf(page.postName) === -1) {
            pageList.push(page.postName)
          }
          if (statusList.indexOf(page.postStatus) === -1) {
            statusList.push(page.postStatus)
          }
        };
      }
      pageList.sort();
      blogList.sort();
      statusList.sort();
      for (i in pageList) {
        $('#table7Filter1').append('<option value=' + pageList[i] + '>' + pageList[i] + '</option>');
      }

      for (i in blogList) {
        $('#table7Filter2').append('<option value=' + blogList[i] + '>' + blogList[i] + '</option>');
      }

      for (i in statusList) {
        $('#table7Filter3').append('<option value=' + statusList[i] + '>' + statusList[i] + '</option>');
      }
    }
  }

  function updateTable7() {
    var filterPage = $('#table7Filter1').val();
    var filterBlog = $('#table7Filter2').val();
    var filterStatus = $('#table7Filter3').val();
    $('#table7 table').DataTable().destroy();
    $('#table7 table tbody').remove();
    var tr = '<tbody>';
    for (i in pageData.rows) {
      var pages = pageData.rows[i].value.pageDetails;
      var blogName = pageData.rows[i].value.blogName;
      if (filterBlog !== 'all' && filterBlog !== blogName) {
        continue;
      }
      for (j in pages) {
        var page = pages[j];
        if (filterPage !== 'all' && filterPage !== page.postName) {
          continue;
        }
        if (filterStatus !== 'all' && filterStatus !== page.postStatus) {
          continue;
        }
        tr += '<tr><td>' + page.postName + '</td><td>' + blogName + '</td><td>' + page.postStatus + '</td><td></td><td></td></tr>';
      };
    }
    $('#table7 table').append(tr + '</tbody>');
    $('#table7 table').DataTable({
      "iDisplayLength": 25,
      "scrollY": '51vh',
      "scrollX": false
    });
  }

  function calTable8() {
    $('#table8').hide();
    $('#tableLoading').show();
    $('#table h2').text('User Details: By Users');
    if (userData.rows != undefined) {
      updateFilter8();
      updateTable8();
      console.log("userDetails", userData);
      if ($('#tableDiv').hasClass('card8')) {
        $('#table8').show();
        $('#table8 table').DataTable().search('').draw();
        $('#tableLoading').hide();
      }
    }

    function updateFilter8() {
      var blogList = [];
      for (i in userData.rows) {
        var blogName = userData.rows[i].value.blogName;
        if (blogName != '' && blogList.indexOf(blogName) === -1) {
          blogList.push(blogName)
        }
      }
      blogList.sort();
      for (i in blogList) {
        $('#table8Filter1').append('<option value=' + blogList[i] + '>' + blogList[i] + '</option>');
      }
    }

  }

  function updateTable8() {
    var op1 = $('#table8FilterOp1').val();
    var blogFilter = $('#table8Filter1').val();
    var op2 = $('#table8FilterOp2').val();
    var roleFilter = $('#table8Filter2').val();
    $('#table8 table').DataTable().destroy();
    $('#table8 table tbody').remove();
    var tr = '<tbody>';
    for (let blog of userData.rows) {
      if (op1 == 'equal' && blogFilter != 'all' && blogFilter != blog.value.blogName) {
        continue;
      } else if (op1 == 'notequal' && (blogFilter == 'all' || blogFilter == blog.value.blogName)) {
        continue;
      }
      let userList = [];
      for (let user of blog.value.users) {
        if (op2 == 'equal' && roleFilter != 'all' && roleFilter != user.roles) {
          continue;
        } else if (op2 == 'notequal' && (roleFilter == 'all' || roleFilter == user.roles)) {
          continue;
        }
        if (user.userEmail && userList.indexOf(user.userEmail) == -1) {
          userList.push(user.userEmail);
          tr += '<tr><td>' + user.displayName + '</td><td><a href="mailto:' + user.userEmail + '">' + user.userEmail + '</a></td><td><span>' + blog.value.blogName + '</span><a class="jumpLink"><img src="./images/menu.svg" alt="Blogs" /></a></td><td>' + getTrueUserRole(user.roles) + '</td><td>' + user.userLogin + '</td></tr>';
        }
      }
    };
    $('#table8 table').append(tr + '</tbody>');
    $('#table8 tbody tr td:nth-child(3)').click(function() {
      $(this).addClass('showBlogMenu');
      var name = $(this).parent().children()[2].innerText;
      var top = $(this).offset().top;
      var left = $(this).offset().left;
      blogMenu(name, top, left);
    });

    $('#table8 table').DataTable({
      "iDisplayLength": 25,
      "scrollY": '51vh',
      "scrollX": false
    });
  }

  // 9th Table
  function calTable9() {
    $('#table9').hide();
    $('#tableLoading').show();
    $('#table h2').text('Plug-in Details: By Plug-in');
    if (pluginData.rows != undefined) {
      updateTable9();
      console.log("pluginDetails", pluginData);
      if ($('#tableDiv').hasClass('card9')) {
        $('#table9').show();
        $('#table9 table').DataTable().search('').draw();
        $('#tableLoading').hide();
      }
    } else {
      $.ajax({
        url: '/pluginDetails?version=' + currentVersion,
        success: function(result) {
          $.ajax({
            url: '/plugins?version=' + currentVersion,
            success: function(statusResult) {
              pluginData = result;
              var status = {};
              for (var i in statusResult.rows) {
                var st = statusResult.rows[i];
                status[st.id] = st.value.status;
              }
              for (var i in pluginData.rows) {
                for (var j in pluginData.rows[i].value.pluginDetails) {
                  var plugin = pluginData.rows[i].value.pluginDetails[j];
                  plugin['active'] = plugin.status;
                  plugin.status = status[plugin.pluginName];
                }
              }
              console.log("pluginDetails", pluginData);
              updateTable9();
              if ($('#tableDiv').hasClass('card9')) {
                $('#table9').show();
                $('#table9 table').DataTable().search('').draw();
                $('#tableLoading').hide();
              }
            },
            error: function(error) {
              pluginData = {};
              console.log("pluginStatus Error", error);
            }
          })
        },
        error: function(error) {
          pluginData = {};
          console.log("pluginDetails Error", error);
        }
      })
    }

  }

  function updateTable9() {
    $('#table9 table').DataTable().destroy();
    $('#table9 table tbody').remove();
    var tr = '<tbody>';
    var result = {};
    for (i in pluginData.rows) {
      var plugins = pluginData.rows[i].value.pluginDetails;
      for (j in plugins) {
        var plugin = plugins[j];
        if (Object.keys(result).indexOf(plugin.pluginName) == -1) {
          result[plugin.pluginName] = {
            activeCount: 0,
            inactiveCount: 0
          };
        }
        if (plugin.active === 'active') {
          result[plugin.pluginName].activeCount += 1;
        } else {
          result[plugin.pluginName].inactiveCount += 1;
        }
      };
    }
    for (plugin in result) {
      tr += '<tr><td>' + plugin + '</td><td>' + result[plugin].activeCount + '</td><td>' + result[plugin].inactiveCount + '</td></tr>';
    }
    $('#table9 table').append(tr + '</tbody>');
    $('#table9 table').DataTable({
      "iDisplayLength": 25,
      "scrollY": '51vh',
      "scrollX": false
    });
  }

  // 9th Table
  function calTable10() {
    $('#table10').hide();
    $('#tableLoading').show();
    $('#table h2').text('Page Details: By Page');
    if (pageData.rows != undefined) {
      updateTable10();
      console.log("pageDetail", pageData);
      if ($('#tableDiv').hasClass('card10')) {
        $('#table10').show();
        $('#table10 table').DataTable().search('').draw();
        $('#tableLoading').hide();
      }
    } else {
      $.ajax({
        url: '/pageDetails?version=' + currentVersion,
        success: function(result) {
          pageData = result;
          updateTable10();
          if ($('#tableDiv').hasClass('card10')) {
            $('#table10').show();
            $('#table10 table').DataTable().search('').draw();
            $('#tableLoading').hide();
          }
          console.log('pageDetails', pageData);
        },
        error: function(error) {
          pageData = [];
          console.error('pageDetails Error', error);
        }
      })
    }

  }

  function updateTable10() {
    $('#table10 table').DataTable().destroy();
    $('#table10 table tbody').remove();
    var tr = '<tbody>';
    var result = {};
    for (i in pageData.rows) {
      var pubCount = 0,
        unPubCount = 0;
      var pages = pageData.rows[i].value.pageDetails;
      for (j in pages) {
        var page = pages[j];
        if (page.postStatus === 'publish') {
          pubCount += 1;
        } else {
          unPubCount += 1;
        }
      };
      tr += '<tr><td>' + pageData.rows[i].value.blogName + '</td><td>' + pubCount + '</td><td>' + unPubCount + '</td></tr>';
    }
    $('#table10 table').append(tr + '</tbody>');
    $('#table10 table').DataTable({
      "iDisplayLength": 25,
      "scrollY": '51vh',
      "scrollX": false
    });
  }

  function reset() {
    $('.card').show();
    $('#table').hide();
    $('.ibm-highlight').removeClass('ibm-highlight');
    $('.ibm-sitenav-menu-list>ul>li:nth-child(1)').addClass('ibm-highlight');
    $('#loadingMockupSpinner div.ibm-spinner').css('animation', startStyle);
    $('#loadingText').text('LOADING');
    $('#loadingMockupSpinner p.ibm-ind-link').hide();
    $('#loadingMockupSpinner').show();
    blogs = [];
    blogData = {};
    themeData = {};
    pluginData = {};
    userData = [];
    pageData = {};
    currentVersion = 'prod';
    googleResults = null;
    $('#currentTime span:nth-child(2)').text('');
    $('#card1 .cardValue').text('');
    $('#card2 .cardValue').text('');
    $('#card3 .cardValue').text('');
    $('#card4 .cardValue').text('');
    $('#card5 .cardValue').text('');
    $('#card6 .cardValue').text('');
    $('#card7 .cardValue').text('');
    $('#card8 .cardValue').text('');
    $('#table').hide();
  }

  function dashBoardRun() {
    $.ajax({
      url: "/dashBoard?version=" + currentVersion,
      success: function(result) {
        console.log('dashBoard', result);
        blogs = result;
        loadSuccess();
      },
      error: function(err) {
        console.error('dashBoard', err);
        blogs = 'error';
        loadFailed();
      }
    });

    $.ajax({
      url: '/userDetails?version=' + currentVersion,
      success: function(result) {
        userData = result;
        console.log("userDetails", userData);
        loadSuccess();
      },
      error: function(error) {
        userData = 'error';
        console.error("userDetails Error", error);
        loadFailed();
      }
    })

    $.ajax({
      url: "/googleAnalytics?version=" + currentVersion,
      success: function(result) {
        console.log('googleAnalytics', result);
        googleResults = {};
        for (i in result) {
          var value = result[i][0].split('/');
          var key = '';
          var num = '';
          if (value.length === 3) {
            key = value[1];
            num = result[i][1];
            googleResults[key] = formatNumber(num);
          }
        };
        loadSuccess();
      },
      error: function(err) {
        console.error('googleAnalytics', err);
        googleResults = 'error';
        loadFailed();
      }
    });
  }

  function loadSuccess() {
    if (googleResults == 'error' || blogs == 'error' || userData == 'error') {
      loadFailed();
    } else if (googleResults != null && blogs.length != 0 && userData.length != 0) {
      calBlogCount();
      calStaThe();
      calPlugin();
      calCurDay();
      calPost();
      calAuthor();
      calPages();
      calUsers();
      $('#loadingMockupSpinner').hide();
    }
  }

  function loadFailed() {
    console.log('Load Failed! Please retry!');
    $('#loadingMockupSpinner div.ibm-spinner').css('animation', stopStyle);
    $('#loadingText').text('ERROR');
    $('#loadingMockupSpinner p.ibm-ind-link').show();
  }

  function blogMenu(name, top, left) {
    if ($('#switchVersion').val() === 'prod') {
      var url = 'https://admin.blogs.prd.ibm.event.ibm.com/blogs/' + name + '/wp-admin/';
    } else {
      var url = 'https://admin.blogs.pre.ibm.event.ibm.com/blogs/' + name + '/wp-admin/';
    }
    $('#moreInfoDiv p:nth-child(1) a').attr('href', 'https://www.ibm.com/blogs/' + name + '/');
    $('#moreInfoDiv p:nth-child(2) a').attr('href', url);
    $('#moreInfoDiv p:nth-child(3) a').attr('blogname', name);
    $('#moreInfoDiv').css({
      top: top + 5,
      left: left
    });
    $('#moreInfoDiv').show();
  }

  function resetTable1Filters() {
    $('#table1Filter1').val('all').change();
    $('#table1Filter2').val('all').change();
    $('#table1Filter3').val('all').change();
  }

  function resetTable2Filters() {
    $('#table2FilterOp1').val('equal').change();
    $('#table2Filter1').val('all').change();
    $('#table2FilterOp2').val('equal').change();
    $('#table2Filter2').val('all').change();
    $('#table2Filter3').val('active').change();
  }

  function resetTable5Filters() {
    $('#table5Filter1').val('all').change();
    $('#table5Filter2').val('all').change();
    $('#table5Filter3').val('active').change();
    $('#table5Filter4').val('all').change();
    $('#table5Filter5').val('approved').change();
  }

  function resetTable7Filters() {
    $('#table7Filter1').val('all').change();
    $('#table7Filter2').val('all').change();
    $('#table7Filter3').val('all').change();
    $('#table7Filter4').val('all').change();
  }

  function resetTable8Filters() {
    $('#table8FilterOp1').val('equal').change();
    $('#table8Filter1').val('all').change();
    $('#table8FilterOp2').val('equal').change();
    $('#table8Filter2').val('all').change();
  }

  function resetEmailUsersPopup() {
    $("#emailUsersPopup input#allRolesPopup").prop('checked', true);
    $("#emailUsersPopup input#authorRolePopup").prop('checked', false);
    $("#emailUsersPopup input#subRolePopup").prop('checked', false);
    $("#emailUsersPopup input#conRolePopup").prop('checked', false);
    $("#emailUsersPopup input#siteRolePopup").prop('checked', false);
    $("#emailUsersPopup input#adminRolePopup").prop('checked', false);
    $('#speRolesPopupGroup').hide();
  }

  function calEmails(blogNames) {
    addressStr = '';
    $('.copyAddressBtn').text('Copy addresses');
    var emails = [];
    if ($('#emailUsersPopup input#allRolesPopup').prop('checked')) {
      for (var i in userData.rows) {
        var blog = userData.rows[i]
        if (blogNames.indexOf(blog.id) == -1) {
          continue;
        }
        var users = blog.value.users;
        for (var j in users) {
          var addr = users[j].userEmail;
          if (emails.indexOf(addr) !== -1 && emails.length != 0) {
            continue;
          }
          emails.push(addr);
        }
      }
    } else {
      var roleTypes = [];
      if ($('#emailUsersPopup input#authorRolePopup').prop('checked')) {
        roleTypes.push('author')
      }
      if ($('#emailUsersPopup input#subRolePopup').prop('checked')) {
        roleTypes.push('subscriber')
      }
      if ($('#emailUsersPopup input#conRolePopup').prop('checked')) {
        roleTypes.push('editor')
      }
      if ($('#emailUsersPopup input#siteRolePopup').prop('checked')) {
        roleTypes.push('site_owner')
      }
      if ($('#emailUsersPopup input#adminRolePopup').prop('checked')) {
        roleTypes.push('administrator')
      }
      for (var i in userData.rows) {
        var blog = userData.rows[i]
        if (blogNames.indexOf(blog.id) == -1) {
          continue;
        }
        var users = blog.value.users;
        for (var j in users) {
          var user = users[j]
          if (roleTypes.indexOf(user.roles) === -1) {
            continue
          }
          if (emails.indexOf(user.userEmail) !== -1 && emails.length != 0) {
            continue;
          }
          emails.push(user.userEmail);
        }
      }
    }
    console.log('emails', emails.length);
    addressStr = emails.join(', ');
    $('#copyEmailBtn').attr('data-clipboard-text', addressStr);
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

  function getTimeToTime(date) {
    var dateC = date.match(/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
    if (dateC) {
      var dateC = new Date(parseInt(dateC[1], 10),
        parseInt(dateC[2], 10) - 1,
        parseInt(dateC[3], 10),
        parseInt(dateC[4], 10),
        parseInt(dateC[5], 10),
        parseInt(dateC[6], 10));
      return dateC.getTime();
    } else {
      return undefined;
    }
  }

  function getTimeToDate2(num) {
    if (!num) {
      return '';
    } else {
      var date = new Date(num);
      var year = date.getFullYear();
      var monthList = new Array(12);
      monthList[0] = "Jan";
      monthList[1] = "Feb";
      monthList[2] = "Mar";
      monthList[3] = "Apr";
      monthList[4] = "May";
      monthList[5] = "Jun";
      monthList[6] = "Jul";
      monthList[7] = "Aug";
      monthList[8] = "Sep";
      monthList[9] = "Oct";
      monthList[10] = "Nov";
      monthList[11] = "Dec";
      var month = monthList[date.getMonth()];
      var day = date.getDate();
      var result = day + ' ' + month + ' ' + year; // dd mm yyyy
      return result;
    }
  }

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

  function formatNumber(num) {
    var result = '';
    if (typeof(num) === 'number') {
      num += '';
    }
    if (num.length >= 4 && num.length < 7) {
      result = num.slice(0, num.length - 3) + ',' + num.slice(num.length - 3);
    } else if (num.length >= 7 && num.length < 10) {
      result = num.slice(0, num.length - 6) + ',' + num.slice(num.length - 6, num.length - 3) + ',' + num.slice(num.length - 3);
    } else if (num.length >= 10) {
      result = num.slice(0, num.length - 9) + ',' + num.slice(num.length - 9, num.length - 6) + ',' + num.slice(num.length - 6, num.length - 3) + ',' + num.slice(num.length - 3);
    } else {
      result = num;
    }
    return result;
  }

  function compareVersion(ver1, ver2) {
    if (ver1.endsWith('.0')) {
      ver1 = ver1.slice(0, ver1.indexOf('.0'));
    }
    if (ver2.endsWith('.0')) {
      ver2 = ver2.slice(0, ver2.indexOf('.0'));
    }
    var arr1 = ver1.split('.');
    var arr2 = ver2.split('.');

    var len = arr1.length > arr2.length ? arr1.length : arr2.length;
    for (var i = 0; i < len; i++) {
      if ((parseInt(arr1[i]) || 0) > (parseInt(arr2[i]) || 0)) {
        return 1;
      } else if ((parseInt(arr1[i]) || 0) < (parseInt(arr2[i]) || 0)) {
        return -1;
      }
    }
    return 0;
  }

  function judgeIfCurrent(themeName, version) {
    if (typeof themeName != 'string' || typeof version != 'string') {
      return -1
    } else {
      if (themeName === CurrentVersion.version1.themeName && (compareVersion(version, CurrentVersion.version1.version) != -1)) {
        return 1
      } else if (themeName === CurrentVersion.version2.themeName && (compareVersion(version, CurrentVersion.version2.version) != -1)) {
        return 1
      }
      return 0
    }
  }

  function getTrueUserRole(role) {
    if (typeof role != 'string') {
      return role;
    }

    switch (role) {
      case 'site_owner':
        return 'Site Owners';
      case 'administrator':
        return 'Administrators';
      case 'author':
        return 'Author';
      case 'contributor':
        return 'Contributors';
      case 'editor':
        return 'Editor';
      case 'subscriber':
        return 'Subscribers';
      default:
        return role;
    }
  }

});
