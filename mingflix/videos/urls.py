from django.urls import path
from . import views

app_name = "videos"
urlpatterns = [
    path("", view=views.MyVideos.as_view(), name="following_videos"),
    path("<int:video_id>/", view=views.VideoDetail.as_view(), name="video_detail"),
    path("<int:video_id>/likes/", view=views.LikeVideo.as_view(), name="video_like"),
    path("<int:video_id>/cancellikes/", view=views.CancelLikeVideo.as_view(), name="video_cancellike"),
    path("<int:video_id>/unlikes/", view=views.UnlikeVideo.as_view(), name="video_unlike"),
    path("<int:video_id>/cancelunlikes/", view=views.CancelUnlikeVideo.as_view(), name="video_cancelunlike"),
    path("<int:video_id>/comments/", view=views.CommentOnVideo.as_view(), name="video_comment"),
    path("<int:video_id>/comments/<int:comment_id>/", view=views.ModerateComment.as_view(), name="comment_moderate"),
    path("<int:video_id>/replys/<int:reply_id>/", view=views.ModerateReply.as_view(), name="reply_moderate"),
    path("comments/<int:comment_id>/delete/", view=views.DeleteMyComment.as_view(), name="comment_delete"),
    path("comments/<int:comment_id>/likes/", view=views.LikeComment.as_view(), name="comment_like"),
    path("comments/<int:comment_id>/cancellikes/", view=views.CancelLikeComment.as_view(), name="comment_cancellike"),
    path("comments/<int:comment_id>/unlikes/", view=views.UnlikeComment.as_view(), name="comment_unlike"),
    path("comments/<int:comment_id>/cancelunlikes/", view=views.CancelUnlikeComment.as_view(), name="comment_cancelunlike"),
    path("comments/<int:comment_id>/replys/", view=views.ReplyOnComment.as_view(), name="comment_reply"),
    path("replys/<int:reply_id>/likes/", view=views.LikeReply.as_view(), name="reply_like"),
    path("replys/<int:reply_id>/cancellikes/", view=views.CancelLikeReply.as_view(), name="reply_cancellike"),
    path("replys/<int:reply_id>/unlikes/", view=views.UnlikeReply.as_view(), name="reply_unlike"),
    path("replys/<int:reply_id>/cancelunlikes/", view=views.CancelUnlikeReply.as_view(), name="reply_cancelunlike"),
    path("replys/<int:reply_id>/delete/", view=views.DeleteMyReply.as_view(), name="reply_delete"),
    path("history/", view=views.History.as_view(), name="history"),
    path("hot/", view=views.HotVideos.as_view(), name="hot"),
    path("search/", view=views.Search.as_view(), name="video_search"),
    path("followings/", view=views.VideosOfFollowing.as_view(), name="followings_video"),
    path("post/", view=views.PostVideo.as_view(), name="post_video"),
]
