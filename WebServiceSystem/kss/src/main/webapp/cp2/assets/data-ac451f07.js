import{cR as m,cS as c}from"./index-b174b04d.js";function p(e){const t=e.filter(a=>{var s,r;return((r=(s=a.perms)==null?void 0:s.findIndex(l=>!m(l)))!=null?r:-1)===-1});for(let a=0,s=t.length;a<s;a+=1)t[a].children&&(t[a].children=p(t[a].children));return t}function n(){const{global:{t:e}}=c,t=[{label:e("menu.personal"),key:"menu.personal.key",perms:["menu.personal"],children:[{label:e("menu.personal.password"),key:"password:update",perms:["password:update","password:matches"]},{label:e("menu.personal.homepage.systemInfo"),key:"homepage:systemInfo",perms:["homepage:systemInfo"]},{label:e("menu.personal.homepage.systemMonitor"),key:"homepage:systemMonitor",perms:["homepage:systemMonitor"]},{label:e("menu.personal.homepage.generatedKey"),key:"homepage:generatedKey",perms:["homepage:generatedKey"]},{label:e("menu.personal.machine.code"),key:"machine:code",perms:["machine:code"]},{label:e("menu.personal.machine.license"),key:"machine:license",perms:["machine:license"]}]},{label:e("menu.content"),key:"menu.content.kay",perms:["menu.content"],children:[{label:e("menu.content.article"),key:"article.key",perms:["article:page","article:list","channel:list","dict:list","model:list","block:list","tag:list","processInstance:task"],children:[{label:e("list"),key:"article:page"},{label:e("add"),key:"article:create",perms:["article:create","article.submit","jodConvert:doc","jodConvert:library"]},{label:e("view"),key:"article:show",perms:["article:show"]},{label:e("edit"),key:"article:update",perms:["article:update","article.submit","article:show","jodConvert:doc","jodConvert:library"]},{label:e("article.op.internalPush"),key:"article:internalPush",perms:["article:internalPush"]},{label:e("article.op.externalPush"),key:"article:externalPush",perms:["article:externalPush"]},{label:e("article.op.updateOrder"),key:"article:updateOrder",perms:["article:updateOrder"]},{label:e("article.op.sticky"),key:"article:sticky",perms:["article:sticky"]},{label:e("article.op.submit"),key:"article:submit",perms:["article:submit"]},{label:e("article.op.archive"),key:"article:archive",perms:["article:archive"]},{label:e("article.op.offline"),key:"article:offline",perms:["article:offline"]},{label:e("delete"),key:"article:delete",perms:["article:delete"]},{label:e("completelyDelete"),key:"article:completelyDelete",perms:["article:completelyDelete"]}]},{label:e("menu.content.articleReview"),key:"articleReview.key",perms:["articleReview:page","articleReview:list","channel:list","dict:list","model:list","block:list","processInstance:task"],children:[{label:e("list"),key:"articleReview:page"},{label:e("pass"),key:"articleReview:pass",perms:["articleReview:pass"]},{label:e("reject"),key:"articleReview:reject",perms:["articleReview:reject"]}]},{label:e("menu.content.channel"),key:"channel.key",perms:["channel:page","channel:list","processDefinition:list","model:list"],children:[{label:e("list"),key:"channel:page"},{label:e("add"),key:"channel:create",perms:["channel:create"]},{label:e("edit"),key:"channel:update",perms:["channel:update","channel:show"]},{label:e("delete"),key:"channel:delete",perms:["channel:delete"]}]},{label:e("menu.content.blockItem"),key:"blockItem.key",perms:["blockItem:page","blockItem:list","block:list"],children:[{label:e("list"),key:"blockItem:page"},{label:e("add"),key:"blockItem:create",perms:["blockItem:create"]},{label:e("edit"),key:"blockItem:update",perms:["blockItem:update","blockItem:show"]},{label:e("delete"),key:"blockItem:delete",perms:["blockItem:delete"]}]},{label:e("menu.content.dict"),key:"dict.key",perms:["dict:page","dict:list","dictType:list"],children:[{label:e("list"),key:"dict:page"},{label:e("add"),key:"dict:create",perms:["dict:create"]},{label:e("edit"),key:"dict:update",perms:["dict:update","dict:show"]},{label:e("delete"),key:"dict:delete",perms:["dict:delete"]}]},{label:e("menu.content.tag"),key:"tag.key",perms:["tag:page","tag:list"],children:[{label:e("list"),key:"tag:page"},{label:e("add"),key:"tag:create",perms:["tag:create"]},{label:e("edit"),key:"tag:update",perms:["tag:update","tag:show"]},{label:e("delete"),key:"tag:delete",perms:["tag:delete"]}]},{label:e("menu.content.attachment"),key:"attachment.key",perms:["attachment:page","attachment:list"],children:[{label:e("list"),key:"attachment:page"},{label:e("add"),key:"attachment:create",perms:["attachment:create"]},{label:e("edit"),key:"attachment:update",perms:["attachment:update","attachment:show"]},{label:e("delete"),key:"attachment:delete",perms:["attachment:delete"]}]},{label:e("menu.content.generator"),key:"generator.key",perms:["generator:show","siteSettings:html:show","task:list","task:show","task:delete"],children:[{label:e("generator.op.fulltext.reindexAll"),key:"generator:fulltext:reindexAll",perms:["generator:fulltext:reindexAll"]},{label:e("generator.op.fulltext.reindexSite"),key:"generator:fulltext:reindexSite",perms:["generator:fulltext:reindexSite"]},{label:e("generator.html"),key:"generator:html",perms:["generator:html"]},{label:e("site.settings.html"),key:"siteSettings:html:update",perms:["siteSettings:html:update","generator:html"]}]}]},{label:e("menu.interaction"),key:"menu.interaction.key",perms:["menu.interaction"],children:[{label:e("menu.interaction.messageBoard"),key:"messageBoard.key",perms:["messageBoard:page","messageBoard:list"],children:[{label:e("list"),key:"messageBoard:page"},{label:e("add"),key:"messageBoard:create",perms:["messageBoard:create"]},{label:e("edit"),key:"messageBoard:update",perms:["messageBoard:update","messageBoard:show"]},{label:e("updateStatus"),key:"messageBoard:updateStatus",perms:["messageBoard:updateStatus"]},{label:e("delete"),key:"messageBoard:delete",perms:["messageBoard:delete"]}]},{label:e("menu.interaction.vote"),key:"vote.key",perms:["vote:page","vote:list"],children:[{label:e("list"),key:"vote:page"},{label:e("add"),key:"vote:create",perms:["vote:create"]},{label:e("edit"),key:"vote:update",perms:["vote:update","vote:show"]},{label:e("delete"),key:"vote:delete",perms:["vote:delete"]}]},{label:e("menu.interaction.survey"),key:"survey.key",perms:["survey:page","survey:list"],children:[{label:e("list"),key:"survey:page"},{label:e("add"),key:"survey:create",perms:["survey:create"]},{label:e("edit"),key:"survey:update",perms:["survey:update","survey:show"]},{label:e("delete"),key:"survey:delete",perms:["survey:delete"]}]}]},{label:e("menu.file"),key:"menu.file.key",perms:["menu.file"],children:[{label:e("menu.file.webFileTemplate"),key:"webFileTemplate.key",perms:["webFileTemplate:page","webFileTemplate:list"],children:[{label:e("list"),key:"webFileTemplate:page"},{label:e("add"),key:"webFileTemplate:create",perms:["webFileTemplate:create"]},{label:e("edit"),key:"webFileTemplate:update",perms:["webFileTemplate:update","webFileTemplate:show"]},{label:e("webFile.op.mkdir"),key:"webFileTemplate:mkdir",perms:["webFileTemplate:mkdir"]},{label:e("webFile.op.copy"),key:"webFileTemplate:copy",perms:["webFileTemplate:copy"]},{label:e("webFile.op.move"),key:"webFileTemplate:move",perms:["webFileTemplate:move"]},{label:e("webFile.op.upload"),key:"webFileTemplate:upload",perms:["webFileTemplate:upload"]},{label:e("webFile.op.uploadZip"),key:"webFileTemplate:uploadZip",perms:["webFileTemplate:uploadZip"]},{label:e("webFile.op.downloadZip"),key:"webFileTemplate:downloadZip",perms:["webFileTemplate:downloadZip"]},{label:e("delete"),key:"webFileTemplate:delete",perms:["webFileTemplate:delete"]}]},{label:e("menu.file.webFileUpload"),key:"webFileUpload.key",perms:["webFileUpload:page","webFileUpload:list"],children:[{label:e("list"),key:"webFileUpload:page"},{label:e("add"),key:"webFileUpload:create",perms:["webFileUpload:create"]},{label:e("edit"),key:"webFileUpload:update",perms:["webFileUpload:update","webFileUpload:show"]},{label:e("webFile.op.mkdir"),key:"webFileUpload:mkdir",perms:["webFileUpload:mkdir"]},{label:e("webFile.op.copy"),key:"webFileUpload:copy",perms:["webFileUpload:copy"]},{label:e("webFile.op.move"),key:"webFileUpload:move",perms:["webFileUpload:move"]},{label:e("webFile.op.upload"),key:"webFileUpload:upload",perms:["webFileUpload:upload"]},{label:e("webFile.op.uploadZip"),key:"webFileUpload:uploadZip",perms:["webFileUpload:uploadZip"]},{label:e("webFile.op.downloadZip"),key:"webFileUpload:downloadZip",perms:["webFileUpload:downloadZip"]},{label:e("delete"),key:"webFileUpload:delete",perms:["webFileUpload:delete"]}]},{label:e("menu.file.webFileHtml"),key:"webFileHtml.key",perms:["webFileHtml:page","webFileHtml:list"],children:[{label:e("list"),key:"webFileHtml:page"},{label:e("add"),key:"webFileHtml:create",perms:["webFileHtml:create"]},{label:e("edit"),key:"webFileHtml:update",perms:["webFileHtml:update","webFileHtml:show"]},{label:e("webFile.op.mkdir"),key:"webFileHtml:mkdir",perms:["webFileHtml:mkdir"]},{label:e("webFile.op.copy"),key:"webFileHtml:copy",perms:["webFileHtml:copy"]},{label:e("webFile.op.move"),key:"webFileHtml:move",perms:["webFileHtml:move"]},{label:e("webFile.op.upload"),key:"webFileHtml:upload",perms:["webFileHtml:upload"]},{label:e("webFile.op.uploadZip"),key:"webFileHtml:uploadZip",perms:["webFileHtml:uploadZip"]},{label:e("webFile.op.downloadZip"),key:"webFileHtml:downloadZip",perms:["webFileHtml:downloadZip"]},{label:e("delete"),key:"webFileHtml:delete",perms:["webFileHtml:delete"]}]},{label:e("menu.file.backupTemplates"),key:"backupTemplates.key",perms:["backupTemplates:page","backupTemplates:list"],children:[{label:e("list"),key:"backupTemplates:page"},{label:e("backupTemplates.op.backup"),key:"backupTemplates:backup",perms:["backupTemplates:backup"]},{label:e("backupTemplates.op.restore"),key:"backupTemplates:restore",perms:["backupTemplates:restore"]},{label:e("delete"),key:"backupTemplates:delete",perms:["backupTemplates:delete"]}]},{label:e("menu.file.backupUploads"),key:"backupUploads.key",perms:["backupUploads:page","backupUploads:list"],children:[{label:e("list"),key:"backupUploads:page"},{label:e("backupUploads.op.backup"),key:"backupUploads:backup",perms:["backupUploads:backup"]},{label:e("backupUploads.op.restore"),key:"backupUploads:restore",perms:["backupUploads:restore"]},{label:e("delete"),key:"backupUploads:delete",perms:["backupUploads:delete"]}]},{label:e("menu.file.incrementalUploads"),key:"incrementalUploads.key",perms:["incrementalUploads:page","incrementalUploads:list"],children:[{label:e("list"),key:"incrementalUploads:page"},{label:e("incrementalUploads.op.backup"),key:"incrementalUploads:backup",perms:["incrementalUploads:backup"]},{label:e("incrementalUploads.op.merge"),key:"incrementalUploads:merge",perms:["incrementalUploads:merge"]},{label:e("incrementalUploads.op.restore"),key:"incrementalUploads:restore",perms:["incrementalUploads:restore"]},{label:e("delete"),key:"incrementalUploads:delete",perms:["incrementalUploads:delete"]}]},{label:e("menu.file.backupDatabase"),key:"backupDatabase.key",perms:["backupDatabase:page","backupDatabase:list"],children:[{label:e("list"),key:"backupDatabase:page"},{label:e("backupDatabase.op.backup"),key:"backupDatabase:backup",perms:["backupDatabase:backup"]},{label:e("backupDatabase.op.restore"),key:"backupDatabase:restore",perms:["backupDatabase:restore"]},{label:e("delete"),key:"backupDatabase:delete",perms:["backupDatabase:delete"]}]}]},{label:e("menu.config"),key:"menu.config.key",perms:["menu.config"],children:[{label:e("menu.config.globalSettings"),key:"config.key",perms:["config:show"],children:[{label:e("config.settings.base"),key:"config:base:update",perms:["config:base:update","site:list"]},{label:e("config.settings.upload"),key:"config:upload:update",perms:["config:upload:update"]},{label:e("config.settings.register"),key:"config:register:update",perms:["config:register:update"]},{label:e("config.settings.security"),key:"config:security:update",perms:["config:security:update"]},{label:e("config.settings.sms"),key:"config:sms:update",perms:["config:sms:show","config:sms:update"]},{label:e("config.settings.email"),key:"config:email:update",perms:["config:email:show","config:email:update"]},{label:e("config.settings.uploadStorage"),key:"config:uploadStorage:update",perms:["config:uploadStorage:show","config:uploadStorage:update"]},{label:e("config.settings.htmlStorage"),key:"config:htmlStorage:update",perms:["config:htmlStorage:show","config:htmlStorage:update"]},{label:e("config.settings.templateStorage"),key:"config:templateStorage:update",perms:["config:templateStorage:show","config:templateStorage:update"]},{label:e("config.settings.customs"),key:"config:customs:update",perms:["config:customs:update"]}]},{label:e("menu.config.siteSettings"),key:"siteSettings.key",perms:["siteSettings:show"],children:[{label:e("site.settings.base"),key:"siteSettings:base:update",perms:["siteSettings:base:update","site:theme"]},{label:e("site.settings.watermark"),key:"siteSettings:watermark:update",perms:["siteSettings:watermark:update"]},{label:e("site.settings.editor"),key:"siteSettings:editor:update",perms:["siteSettings:editor:update"]},{label:e("site.settings.messageBoard"),key:"siteSettings:messageBoard:update",perms:["siteSettings:messageBoard:update"]},{label:e("site.settings.customs"),key:"siteSettings:customs:update",perms:["siteSettings:customs:update"]}]},{label:e("menu.config.model"),key:"model.key",perms:["model:page","model:list"],children:[{label:e("list"),key:"model:page"},{label:e("add"),key:"model:create",perms:["model:create"]},{label:e("edit"),key:"model:update",perms:["model:update","model:show"]},{label:e("delete"),key:"model:delete",perms:["model:delete"]}]},{label:e("menu.config.block"),key:"block.key",perms:["block:page","block:list","block:validation"],children:[{label:e("list"),key:"block:page"},{label:e("add"),key:"block:create",perms:["block:create"]},{label:e("edit"),key:"block:update",perms:["block:update","block:show"]},{label:e("delete"),key:"block:delete",perms:["block:delete"]}]},{label:e("menu.config.dictType"),key:"dictType.key",perms:["dictType:page","dictType:list","dictType:validation"],children:[{label:e("list"),key:"dictType:page"},{label:e("add"),key:"dictType:create",perms:["dictType:create"]},{label:e("edit"),key:"dictType:update",perms:["dictType:update","dictType:show"]},{label:e("delete"),key:"dictType:delete",perms:["dictType:delete"]}]},{label:e("menu.config.performanceType"),key:"performanceType.key",perms:["performanceType:page","performanceType:list"],children:[{label:e("list"),key:"performanceType:page"},{label:e("add"),key:"performanceType:create",perms:["performanceType:create"]},{label:e("edit"),key:"performanceType:update",perms:["performanceType:update","performanceType:show"]},{label:e("delete"),key:"performanceType:delete",perms:["performanceType:delete"]}]},{label:e("menu.config.messageBoardType"),key:"messageBoardType.key",perms:["messageBoardType:page","messageBoardType:list"],children:[{label:e("list"),key:"messageBoardType:page"},{label:e("add"),key:"messageBoardType:create",perms:["messageBoardType:create"]},{label:e("edit"),key:"messageBoardType:update",perms:["messageBoardType:update","messageBoardType:show"]},{label:e("delete"),key:"messageBoardType:delete",perms:["messageBoardType:delete"]}]}]},{label:e("menu.stat"),key:"menu.stat.key",perms:["menu.stat"],children:[{label:e("menu.stat.visit"),key:"menu.stat.visit.key",perms:["menu.stat.visit"],children:[{label:e("menu.stat.visitTrend"),key:"visitTrend:page",perms:["visitTrend:page","visitTrend:list"]},{label:e("menu.stat.visitedPage"),key:"visitedPage:page",perms:["visitedPage:page","visitedPage:list"]},{label:e("menu.stat.entryPage"),key:"entryPage:page",perms:["entryPage:page","entryPage:list"]},{label:e("menu.stat.visitSource"),key:"visitSource:page",perms:["visitSource:page","visitSource:list"]}]},{label:e("menu.stat.visitor"),key:"menu.stat.visitor.key",perms:["menu.stat.visitor"],children:[{label:e("menu.stat.visitVisitor"),key:"visitVisitor:page",perms:["visitVisitor:page","visitVisitor:list"]},{label:e("menu.stat.visitRegion"),key:"visitRegion:page",perms:["visitRegion:page","visitCountry:list","visitProvince:list"]},{label:e("menu.stat.visitEnv"),key:"visitEnv:page",perms:["visitEnv:page","visitDevice:list","visitOs:list","visitBrowser:list"]}]},{label:e("menu.stat.articleStat"),key:"menu.stat.articleStat.key",perms:["menu.stat.articleStat"],children:[{label:e("menu.stat.articleStat.byUser"),key:"articleStatByUser:page",perms:["articleStatByUser:page","articleStatByUser:list"]},{label:e("menu.stat.articleStat.byOrg"),key:"articleStatByOrg:page",perms:["articleStatByOrg:page","articleStatByOrg:list"]},{label:e("menu.stat.articleStat.byChannel"),key:"articleStatByChannel:page",perms:["articleStatByChannel:page","articleStatByChannel:list"]}]},{label:e("menu.stat.performanceStat"),key:"menu.stat.performanceStat.key",perms:["menu.stat.performanceStat"],children:[{label:e("menu.stat.performanceStat.byUser"),key:"performanceStatByUser:page",perms:["performanceStatByUser:page","performanceStatByUser:list"]},{label:e("menu.stat.performanceStat.byOrg"),key:"performanceStatByOrg:page",perms:["performanceStatByOrg:page","performanceStatByOrg:list"]}]}]},{label:e("menu.user"),key:"menu.user.key",perms:["menu.user"],children:[{label:e("menu.user.user"),key:"user.key",perms:["user:page","user:list","role:list","group:list","org:list"],children:[{label:e("list"),key:"user:page"},{label:e("add"),key:"user:create",perms:["user:create"]},{label:e("edit"),key:"user:update",perms:["user:update","user:show"]},{label:e("changePassword"),key:"user:updatePassword",perms:["user:updatePassword","user:show"]},{label:e("updateStatus"),key:"user:updateStatus",perms:["user:updateStatus","user:show"]},{label:e("permissionSettings"),key:"user:updatePermission",perms:["user:updatePermission","user:show"]},{label:e("delete"),key:"user:delete",perms:["user:delete"]}]},{label:e("menu.user.role"),key:"role.key",perms:["role:page","role:list","role:validation","channel:list"],children:[{label:e("list"),key:"role:page"},{label:e("add"),key:"role:create",perms:["role:create"]},{label:e("edit"),key:"role:update",perms:["role:update","role:show"]},{label:e("permissionSettings"),key:"role:updatePermission",perms:["role:updatePermission","role:show"]},{label:e("delete"),key:"role:delete",perms:["role:delete"]}]},{label:e("menu.user.org"),key:"org.key",perms:["org:page","org:list"],children:[{label:e("list"),key:"org:page"},{label:e("add"),key:"org:create",perms:["org:create"]},{label:e("edit"),key:"org:update",perms:["org:update","org:show"]},{label:e("delete"),key:"org:delete",perms:["org:delete"]}]},{label:e("menu.user.group"),key:"group.key",perms:["group:page","group:list"],children:[{label:e("list"),key:"group:page"},{label:e("add"),key:"group:create",perms:["group:create"]},{label:e("edit"),key:"group:update",perms:["group:update","group:show"]},{label:e("permissionSettings"),key:"group:updatePermission",perms:["group:updatePermission","group:show"]},{label:e("delete"),key:"group:delete",perms:["group:delete"]}]}]},{label:e("menu.log"),key:"menu.log.key",perms:["menu.log"],children:[{label:e("menu.log.shortMessage"),key:"shortMessage.key",perms:["shortMessage:page","shortMessage:list","shortMessage:show"],children:[{label:e("list"),key:"shortMessage:page"},{label:e("delete"),key:"shortMessage:delete",perms:["shortMessage:delete"]}]},{label:e("menu.log.loginLog"),key:"loginLog.key",perms:["loginLog:page","loginLog:list","loginLog:show"],children:[{label:e("list"),key:"loginLog:page"},{label:e("delete"),key:"loginLog:delete",perms:["loginLog:delete"]}]},{label:e("menu.log.operationLog"),key:"operationLog.key",perms:["operationLog:page","operationLog:list","operationLog:show"],children:[{label:e("list"),key:"operationLog:page"},{label:e("delete"),key:"operationLog:delete",perms:["operationLog:delete"]}]}]},{label:e("menu.system"),key:"menu.system.key",perms:["menu.system"],children:[{label:e("menu.system.site"),key:"site.key",perms:["site:page","site:list","org:list","model:list","site:theme"],children:[{label:e("list"),key:"site:page"},{label:e("add"),key:"site:create",perms:["site:create"]},{label:e("edit"),key:"site:update",perms:["site:update","site:show"]},{label:e("delete"),key:"site:delete",perms:["site:delete"]}]},{label:e("menu.system.processModel"),key:"processModel.key",perms:["processModel:page","processModel:list","processDefinition:list","dict:list","processDefinition:xml"],children:[{label:e("list"),key:"processModel:page"},{label:e("add"),key:"processModel:create",perms:["processModel:create"]},{label:e("edit"),key:"processModel:update",perms:["processModel:update","processModel:show","processModel:validate"]},{label:e("processModel.op.deploy"),key:"processModel:deploy",perms:["processModel:deploy"]},{label:e("delete"),key:"processModel:delete",perms:["processModel:delete","processDefinition:delete"]}]},{label:e("menu.system.processInstance"),key:"processInstance.key",perms:["processInstance:page","processInstance:list","processInstance:task","processHistory:activity","dict:list"],children:[{label:e("list"),key:"processInstance:page"},{label:e("delete"),key:"processInstance:delete",perms:["processInstance:delete"]}]},{label:e("menu.system.processHistory"),key:"processHistory.key",perms:["processHistory:page","processHistory:list","processInstance:task","processHistory:activity","dict:list"],children:[{label:e("list"),key:"processHistory:page"},{label:e("delete"),key:"processHistory:delete",perms:["processHistory:delete"]}]},{label:e("menu.system.sensitiveWord"),key:"sensitiveWord.key",perms:["sensitiveWord:page","sensitiveWord:list"],children:[{label:e("list"),key:"sensitiveWord:page"},{label:e("add"),key:"sensitiveWord:create",perms:["sensitiveWord:create"]},{label:e("edit"),key:"sensitiveWord:update",perms:["sensitiveWord:update","sensitiveWord:show"]},{label:e("delete"),key:"sensitiveWord:delete",perms:["sensitiveWord:delete"]}]},{label:e("menu.system.errorWord"),key:"errorWord.key",perms:["errorWord:page","errorWord:list"],children:[{label:e("list"),key:"errorWord:page"},{label:e("add"),key:"errorWord:create",perms:["errorWord:create"]},{label:e("edit"),key:"errorWord:update",perms:["errorWord:update","errorWord:show"]},{label:e("delete"),key:"errorWord:delete",perms:["errorWord:delete"]}]}]}];return p(t)}function b(){return{article:{mains:[{code:"title",must:!0,show:!0,double:!1,required:!0},{code:"subtitle",must:!1,show:!1,double:!1,required:!1},{code:"fullTitle",must:!1,show:!1,double:!1,required:!1},{code:"linkUrl",must:!1,show:!0,double:!1,required:!1},{code:"tags",must:!1,show:!1,double:!1,required:!1},{code:"seoKeywords",must:!1,show:!1,double:!1,required:!1},{code:"seoDescription",must:!1,show:!0,double:!1,required:!1},{code:"author",must:!1,show:!1,double:!0,required:!1},{code:"editor",must:!1,show:!1,double:!0,required:!1},{code:"image",must:!1,show:!0,double:!1,required:!1,type:"image",imageWidth:300,imageHeight:200,imageMode:"manual"},{code:"file",must:!1,show:!1,double:!1,required:!1},{code:"video",must:!1,show:!1,double:!1,required:!1},{code:"audio",must:!1,show:!1,double:!1,required:!1},{code:"doc",must:!1,show:!1,double:!1,required:!1},{code:"imageList",must:!1,show:!1,double:!1,required:!1,type:"imageList",imageListType:"pictureCard",imageMaxWidth:1920,imageMaxHeight:1920},{code:"fileList",must:!1,show:!1,double:!1,required:!1},{code:"text",must:!1,show:!0,double:!1,required:!0,type:"editor",editorType:1,editorSwitch:!0}],asides:[{code:"channel",must:!0,show:!0,required:!0},{code:"org",must:!1,show:!0,required:!0},{code:"publishDate",must:!0,show:!0,required:!0},{code:"onlineDate",must:!1,show:!0,required:!1},{code:"offlineDate",must:!1,show:!0,required:!1},{code:"source",must:!1,show:!0,required:!1},{code:"articleTemplate",must:!1,show:!0,required:!1},{code:"allowComment",must:!1,show:!0,required:!0},{code:"user",must:!1,show:!1,required:!0},{code:"created",must:!1,show:!1,required:!0},{code:"modifiedUser",must:!1,show:!1,required:!1},{code:"modified",must:!1,show:!1,required:!1}]},channel:{mains:[{code:"name",must:!0,show:!0,double:!0,required:!0},{code:"alias",must:!0,show:!0,double:!0,required:!0},{code:"linkUrl",must:!0,show:!0,double:!1,required:!0},{code:"seoTitle",must:!1,show:!0,double:!0,required:!1},{code:"seoKeywords",must:!1,show:!0,double:!0,required:!1},{code:"seoDescription",must:!1,show:!0,double:!1,required:!1},{code:"image",must:!1,show:!1,double:!1,required:!1,type:"image",imageWidth:300,imageHeight:200,imageMode:"manual"},{code:"channelModel",must:!0,show:!0,double:!0,required:!0},{code:"articleModel",must:!0,show:!0,double:!0,required:!0},{code:"channelTemplate",must:!1,show:!0,double:!0,required:!0},{code:"articleTemplate",must:!1,show:!0,double:!0,required:!0},{code:"nav",must:!1,show:!0,double:!0,required:!0},{code:"allowComment",must:!1,show:!0,double:!0,required:!0},{code:"allowContribute",must:!1,show:!0,double:!0,required:!0},{code:"allowSearch",must:!1,show:!0,double:!0,required:!0},{code:"text",must:!1,show:!1,double:!1,required:!1,type:"editor",editorType:1,editorSwitch:!0}],asides:[{code:"parent",must:!0,show:!0,required:!1},{code:"type",must:!0,show:!0,required:!0},{code:"processKey",must:!1,show:!0,required:!1},{code:"performanceType",must:!1,show:!0,required:!1,epRank:3},{code:"pageSize",must:!0,show:!0,required:!0},{code:"orderDesc",must:!0,show:!0,required:!0}]}}}function y(e,t,a){let s=JSON.parse(t||"[]");const r=e.map(l=>({...l,label:`${a}.${l.code}`}));return s=s.filter(l=>r.findIndex(o=>o.code===l.code)!==-1),r.forEach((l,o)=>{const i=s.findIndex(d=>d.code===l.code);i!==-1?s[i]={...l,...s[i],must:l.must,label:l.label,type:l.type}:s.splice(o,0,l)}),s}function k(e){const t={};return e.forEach(a=>{t[a.code]=a}),t}const g=["article","channel","blockItem","dict","attachment","fulltext","html","messageBoard","messageBoardType","vote","survey","example","webFileTemplate","webFileUpload","webFileHtml","backupTemplates","backupUploads","incrementalUploads","backupDatabase","config","siteSettings","model","block","dictType","performanceType","user","role","org","group","shortMessage","loginLog","operationLog","site","process","task","personal"],h=["article.create","article.update","article.submit","article.pass","article.reject","article.completelyDelete","article.delete","article.updateOrder","article.sticky","article.internalPush","article.externalPush","channel.create","channel.update","channel.updateOrder","channel.delete","blockItem.create","blockItem.update","blockItem.updateOrder","blockItem.delete","dict.create","dict.update","dict.updateOrder","dict.delete","attachment.delete","fulltext.reindexAll","fulltext.reindexSite","html.updateAll","html.updateHome","html.updateChannel","html.updateArticle","messageBoard.create","messageBoard.update","messageBoard.updateStatus","messageBoard.delete","messageBoardType.create","messageBoardType.update","messageBoardType.updateOrder","messageBoardType.delete","vote.create","vote.update","vote.delete","survey.create","survey.update","survey.delete","example.create","example.update","example.delete","webFileTemplate.create","webFileTemplate.update","webFileTemplate.mkdir","webFileTemplate.rename","webFileTemplate.copy","webFileTemplate.move","webFileTemplate.upload","webFileTemplate.uploadZip","webFileTemplate.delete","webFileUpload.create","webFileUpload.update","webFileUpload.mkdir","webFileUpload.rename","webFileUpload.copy","webFileUpload.move","webFileUpload.upload","webFileUpload.uploadZip","webFileUpload.delete","webFileHtml.create","webFileHtml.update","webFileHtml.mkdir","webFileHtml.rename","webFileHtml.copy","webFileHtml.move","webFileHtml.upload","webFileHtml.uploadZip","webFileHtml.delete","backupTemplates.backup","backupTemplates.restore","backupTemplates.delete","backupUploads.backup","backupUploads.restore","backupUploads.delete","incrementalUploads.backup","incrementalUploads.restore","incrementalUploads.merge","incrementalUploads.delete","backupDatabase.backup","backupDatabase.restore","backupDatabase.delete","config.updateBase","config.updateUpload","config.updateRegister","config.updateSecurity","config.updateSms","config.sendSms","config.updateEmail","config.sendEmail","config.updateUploadStorage","config.updateHtmlStorage","config.updateTemplateStorage","config.updateCustoms","siteSettings.updateBase","siteSettings.updateWatermark","siteSettings.updateEditor","siteSettings.updateMessageBoard","siteSettings.updateCustoms","siteSettings.updateHtml","model.create","model.update","model.updateOrder","model.delete","block.create","block.update","block.updateOrder","block.delete","dictType.create","dictType.update","dictType.updateOrder","dictType.delete","performanceType.create","performanceType.update","performanceType.updateOrder","performanceType.delete","user.create","user.update","user.updatePermission","user.updateStatus","user.updatePassword","user.delete","role.create","role.update","role.updateOrder","role.delete","org.create","org.update","org.updateOrder","org.delete","group.create","group.update","group.updatePermission","group.updateOrder","group.delete","shortMessage.delete","loginLog.delete","operationLog.delete","site.create","site.update","site.updateOrder","site.delete","process.createProcessModel","process.updateProcessModel","process.updateProcessXml","process.deployProcessModel","process.deleteProcessModel","process.deleteProcessDefinition","process.deleteProcessHistory","process.deleteProcessInstance","task.delete","personal.updatePassword"];export{k as a,n as b,h as c,b as g,g as l,y as m};
