package com.ujcms.cms.core.domain.base;

import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

/**
 * This class was generated by MyBatis Generator.
 *
 * @author MyBatis Generator
 */
public class SeqBase implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 数据库表名
     */
    public static final String TABLE_NAME = "seq";

    @Length(max = 50)
    @NotNull
    private String name = "";

    /**
     * 下一个值
     */
    @NotNull
    @Schema(description="下一个值")
    private Long nextVal = 1L;

    /**
     * 缓存数量(大于0时有效，等于0则由程序确定大小)
     */
    @NotNull
    @Schema(description="缓存数量(大于0时有效，等于0则由程序确定大小)")
    private Integer cacheSize = 0;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getNextVal() {
        return nextVal;
    }

    public void setNextVal(Long nextVal) {
        this.nextVal = nextVal;
    }

    public Integer getCacheSize() {
        return cacheSize;
    }

    public void setCacheSize(Integer cacheSize) {
        this.cacheSize = cacheSize;
    }
}