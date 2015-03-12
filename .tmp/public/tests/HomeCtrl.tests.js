describe('HomeCtrl', function() {

    var $scope;
    var HomeCtrl;
    var Validate;

    beforeEach(module('app.controllers'));

    beforeEach(inject(function($rootScope, $controller, $injector) {
        $scope = $rootScope.$new();
        HomeCtrl = $controller('homeCtrl', {$scope: $scope});
    }));

    it('should require a username', function() {
        $scope.register({});
        expect($scope.error.identifier).to.not.equal('');
    });

    it('should not show errors if credentials are valid', function() {
        $scope.register({identifier: 'test@test.com', password: 'password123'});
        expect($scope.error.identifier).to.equal('');
    });
});
