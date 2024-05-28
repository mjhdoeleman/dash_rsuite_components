# AUTO GENERATED FILE - DO NOT EDIT

#' @export
checkTreePicker <- function(id=NULL, appearance=NULL, block=NULL, cascade=NULL, cleanable=NULL, countable=NULL, custom_locale=NULL, data=NULL, defaultExpandAll=NULL, placement=NULL, selected=NULL, style=NULL) {
    
    props <- list(id=id, appearance=appearance, block=block, cascade=cascade, cleanable=cleanable, countable=countable, custom_locale=custom_locale, data=data, defaultExpandAll=defaultExpandAll, placement=placement, selected=selected, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CheckTreePicker',
        namespace = 'dash_rsuite_components',
        propNames = c('id', 'appearance', 'block', 'cascade', 'cleanable', 'countable', 'custom_locale', 'data', 'defaultExpandAll', 'placement', 'selected', 'style'),
        package = 'dashRsuiteComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
