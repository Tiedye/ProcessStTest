window._wq = window._wq || [];

angular.module('videoUpload')
  .component('videoUpload', {
    templateUrl: 'video-upload/video-upload.component.html',
    controller: ['$scope', '$sce', function ($scope, $sce) {
      var ctrl = this;
      ctrl.waiting = true;
      ctrl.showVideo = false;
      $scope.options = {
        disableVideoPreview: true,
        autoUpload: true
      };
      $scope.$on('fileuploaddone', function(event, data) {
        ctrl.showVideo = true;
        ctrl.videoUrl = $sce.trustAsResourceUrl('https://fast.wistia.net/embed/iframe/' + data.result.hashed_id + '?videoFoam=true&playerColor=ff0000');
      });
      $scope.$on('fileuploadsubmit', function(event, data) {
        ctrl.waiting = false;
      });
    }]
  })