angular.module('friendsList').controller('mainCtrl', function($scope) {
	$scope.friends = ['Billy', 'Bob', 'Bo', 'Bubba', 'Bernard', 'Bartholomew'];
	$scope.addFriend = function(newFriend) {
		$scope.friends.push(newFriend);
		$scope.newFriendInput = '';
	}
});