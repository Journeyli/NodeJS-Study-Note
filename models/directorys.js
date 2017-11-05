var marked = require('marked');
var Directory = require('../lib/mongo').Directory;

// 将 directory 的 content 从 markdown 转换成 html
Directory.plugin('contentToHtml', {
  afterFind: function (directorys) {
    return directorys.map(function (directory) {
      directory.content = marked(directory.content);
      return directory;
    });
  },
  afterFindOne: function (directory) {
    if (directory) {
      directory.content = marked(directory.content);
    }
    return directory;
  }
});
module.exports = {
	// 按创建时间降序获取所有用户文章或者某个特定用户的所有文章
  getDirectorys: function getDirectorys(author) {
    var query = {};
    if (author) {
      query.author = author;
    }
    return Directory
      .find(query)
      .populate({ path: 'author', model: 'User' })
      .sort({ _id: -1 })
      .addCreatedAt()
      .contentToHtml()
      .exec();
  }

};
