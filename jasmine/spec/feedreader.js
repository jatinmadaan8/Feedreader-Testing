/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

       //checks whether the feeds are defined or null
         it('url should not be null and is defined', function() {
           for(i= 0; i<allFeeds.length; i++){
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length).not.toBe(0);
           }
         });

         //check whether feed contains name or not
         it('name should not be null and is defined', function() {
           for(i= 0; i<allFeeds.length; i++){
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe(0);
           }
         });
    });



     describe('The menu', function(){

        //Check menu is hidden by default or not
        it('should be hidden by default',function(){
          expect($('body').hasClass('menu-hidden')).not.toBe(false);
        });

         //menu should hide or show on click function
          it('menu should display or hide on click', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
});

    describe('Initial Entries', function() {

        //check there is a single entry on loadFeed
         beforeEach(function(done){
           loadFeed(0,done);
         });

         it('single entry', function() {
           expect($('.feed .entry').length>0).toBe(true);
         });
});

    describe('New Feed Selection', function() {

        //check feed changes every time it reloads
         let feed,
             newfeed;

         beforeEach(function(done){
           loadFeed(0,function(){
             feed = $('.feed').html();

           loadFeed(1,function(){
             newfeed = $('.feed').html();

           done();
             });
           });
         });

         it('Feed changes at reload', function() {
           expect(feed).not.toEqual(newfeed);
         });
});
}());
