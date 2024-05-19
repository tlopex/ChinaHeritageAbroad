package com.ujcms.cms.core.domain.base;

import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.Nullable;

/**
 * This class was generated by MyBatis Generator.
 *
 * @author MyBatis Generator
 */
public class ConfigBase implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 数据库表名
     */
    public static final String TABLE_NAME = "config";

    @NotNull
    private Integer id = 0;

    /**
     * 上下文路径
     */
    @Length(max = 50)
    @Nullable
    @Schema(description="上下文路径")
    private String contextPath;

    /**
     * 端口号
     */
    @Nullable
    @Schema(description="端口号")
    private Integer port;

    @Nullable
    private Boolean multiDomain = false;

    /**
     * 栏目URL地址
     */
    @Length(max = 50)
    @Nullable
    @Schema(description="栏目URL地址")
    private String channelUrl;

    /**
     * 文章URL地址
     */
    @Length(max = 50)
    @Nullable
    @Schema(description="文章URL地址")
    private String articleUrl;

    /**
     * 默认站点ID
     */
    @NotNull
    @Schema(description="默认站点ID")
    private Integer defaultSiteId = 0;

    @Length(max = 2000)
    @Nullable
    private String uploadSettings;

    @Length(max = 2000)
    @Nullable
    private String securitySettings;

    /**
     * 注册设置
     */
    @Length(max = 1000)
    @Nullable
    @Schema(description="注册设置")
    private String registerSettings;

    /**
     * 短信设置
     */
    @Length(max = 1000)
    @Nullable
    @Schema(description="短信设置")
    private String smsSettings;

    @Length(max = 2000)
    @Nullable
    private String emailSettings;

    /**
     * 附件存储点设置
     */
    @Length(max = 1000)
    @Nullable
    @Schema(description="附件存储点设置")
    private String uploadStorageSettings;

    /**
     * HTML存储点设置
     */
    @Length(max = 1000)
    @Nullable
    @Schema(description="HTML存储点设置")
    private String htmlStorageSettings;

    /**
     * 模板存储点设置
     */
    @Length(max = 1000)
    @Nullable
    @Schema(description="模板存储点设置")
    private String templateStorageSettings;

    /**
     * 自定义设置
     */
    @Nullable
    @Schema(description="自定义设置")
    private String customsSettings;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Nullable
    public String getContextPath() {
        return contextPath;
    }

    public void setContextPath(@Nullable String contextPath) {
        this.contextPath = contextPath;
    }

    @Nullable
    public Integer getPort() {
        return port;
    }

    public void setPort(@Nullable Integer port) {
        this.port = port;
    }

    @Nullable
    public Boolean getMultiDomain() {
        return multiDomain;
    }

    public void setMultiDomain(@Nullable Boolean multiDomain) {
        this.multiDomain = multiDomain;
    }

    @Nullable
    public String getChannelUrl() {
        return channelUrl;
    }

    public void setChannelUrl(@Nullable String channelUrl) {
        this.channelUrl = channelUrl;
    }

    @Nullable
    public String getArticleUrl() {
        return articleUrl;
    }

    public void setArticleUrl(@Nullable String articleUrl) {
        this.articleUrl = articleUrl;
    }

    public Integer getDefaultSiteId() {
        return defaultSiteId;
    }

    public void setDefaultSiteId(Integer defaultSiteId) {
        this.defaultSiteId = defaultSiteId;
    }

    @Nullable
    public String getUploadSettings() {
        return uploadSettings;
    }

    public void setUploadSettings(@Nullable String uploadSettings) {
        this.uploadSettings = uploadSettings;
    }

    @Nullable
    public String getSecuritySettings() {
        return securitySettings;
    }

    public void setSecuritySettings(@Nullable String securitySettings) {
        this.securitySettings = securitySettings;
    }

    @Nullable
    public String getRegisterSettings() {
        return registerSettings;
    }

    public void setRegisterSettings(@Nullable String registerSettings) {
        this.registerSettings = registerSettings;
    }

    @Nullable
    public String getSmsSettings() {
        return smsSettings;
    }

    public void setSmsSettings(@Nullable String smsSettings) {
        this.smsSettings = smsSettings;
    }

    @Nullable
    public String getEmailSettings() {
        return emailSettings;
    }

    public void setEmailSettings(@Nullable String emailSettings) {
        this.emailSettings = emailSettings;
    }

    @Nullable
    public String getUploadStorageSettings() {
        return uploadStorageSettings;
    }

    public void setUploadStorageSettings(@Nullable String uploadStorageSettings) {
        this.uploadStorageSettings = uploadStorageSettings;
    }

    @Nullable
    public String getHtmlStorageSettings() {
        return htmlStorageSettings;
    }

    public void setHtmlStorageSettings(@Nullable String htmlStorageSettings) {
        this.htmlStorageSettings = htmlStorageSettings;
    }

    @Nullable
    public String getTemplateStorageSettings() {
        return templateStorageSettings;
    }

    public void setTemplateStorageSettings(@Nullable String templateStorageSettings) {
        this.templateStorageSettings = templateStorageSettings;
    }

    @Nullable
    public String getCustomsSettings() {
        return customsSettings;
    }

    public void setCustomsSettings(@Nullable String customsSettings) {
        this.customsSettings = customsSettings;
    }
}