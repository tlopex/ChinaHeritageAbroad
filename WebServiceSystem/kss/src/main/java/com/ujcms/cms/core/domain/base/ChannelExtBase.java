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
public class ChannelExtBase implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 数据库表名
     */
    public static final String TABLE_NAME = "channel_ext";

    @NotNull
    private Integer id = 0;

    /**
     * SEO标题
     */
    @Length(max = 150)
    @Nullable
    @Schema(description="SEO标题")
    private String seoTitle;

    /**
     * SEO关键词
     */
    @Length(max = 150)
    @Nullable
    @Schema(description="SEO关键词")
    private String seoKeywords;

    /**
     * SEO描述
     */
    @Length(max = 1000)
    @Nullable
    @Schema(description="SEO描述")
    private String seoDescription;

    /**
     * 静态页文件
     */
    @Length(max = 255)
    @Nullable
    @Schema(description="静态页文件")
    private String staticFile;

    /**
     * 手机端静态页文件
     */
    @Length(max = 255)
    @Nullable
    @Schema(description="手机端静态页文件")
    private String mobileStaticFile;

    /**
     * 编辑器类型(1:富文本编辑器,2:Markdown编辑器)
     */
    @NotNull
    @Schema(description="编辑器类型(1:富文本编辑器,2:Markdown编辑器)")
    private Short editorType = 1;

    /**
     * 正文
     */
    @Nullable
    @Schema(description="正文")
    private String text;

    /**
     * Markdown正文
     */
    @Nullable
    @Schema(description="Markdown正文")
    private String markdown;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Nullable
    public String getSeoTitle() {
        return seoTitle;
    }

    public void setSeoTitle(@Nullable String seoTitle) {
        this.seoTitle = seoTitle;
    }

    @Nullable
    public String getSeoKeywords() {
        return seoKeywords;
    }

    public void setSeoKeywords(@Nullable String seoKeywords) {
        this.seoKeywords = seoKeywords;
    }

    @Nullable
    public String getSeoDescription() {
        return seoDescription;
    }

    public void setSeoDescription(@Nullable String seoDescription) {
        this.seoDescription = seoDescription;
    }

    @Nullable
    public String getStaticFile() {
        return staticFile;
    }

    public void setStaticFile(@Nullable String staticFile) {
        this.staticFile = staticFile;
    }

    @Nullable
    public String getMobileStaticFile() {
        return mobileStaticFile;
    }

    public void setMobileStaticFile(@Nullable String mobileStaticFile) {
        this.mobileStaticFile = mobileStaticFile;
    }

    public Short getEditorType() {
        return editorType;
    }

    public void setEditorType(Short editorType) {
        this.editorType = editorType;
    }

    @Nullable
    public String getText() {
        return text;
    }

    public void setText(@Nullable String text) {
        this.text = text;
    }

    @Nullable
    public String getMarkdown() {
        return markdown;
    }

    public void setMarkdown(@Nullable String markdown) {
        this.markdown = markdown;
    }
}