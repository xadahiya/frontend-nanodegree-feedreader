/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('checks all feeds have a non empty url', function(){
            function testURL(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
            allFeeds.forEach(testURL);
        });


        it('checks all feeds have a non empty name', function(){
            function testName(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
            allFeeds.forEach(testName);
        });
    });


    describe('The menu', function(){

        it('ensures the menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

       
          it('ensures the menu changes visiblity when menu icon is clicked', function(){
              // checks if the menu is visible on first click
              $('.menu-icon-link').trigger("click");
              expect($('body').hasClass('menu-hidden')).toBe(false);
              $('.menu-icon-link').trigger("click");
              expect($('body').hasClass('menu-hidden')).toBe(true);
              
          });
    
    });


    describe('Initial Entries', function(){
        
        beforeEach(function(done){
            loadFeed(0, done);
        });
      
        it('ensures there is at least a single .entry element in .feed container on loadFeed', function(done){
            expect($(".feed .entry").length).not.toBe(0);
            done();
        });
    });
    
    describe('New Feed Selection', function(){
        var initial_data;
        beforeEach(function(done){
            loadFeed(0, function(){
            initial_data = $('.feed').html();
            loadFeed(1,done);
            });
        });
       
        it('ensures content actually changes on loadFeed', function(done){

            expect($('.feed').html()).not.toBe(initial_data);
            done();
        });

    });
    

}());
