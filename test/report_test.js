'use strict';

describe('Test of report controller: ', function() {

    beforeEach(module('eventApp.reports'));

    describe('Test if report controller exist:', function(){

        it('Test case: Should have report controller', inject(function($controller) {
            
            var reportsCtrl = $controller('reportsCtrl');
            expect(reportsCtrl).toBeDefined();
        }));
        
	   it("Should be true", function() {
	      expect(true).toBeTruthy();
	   });


    });
});