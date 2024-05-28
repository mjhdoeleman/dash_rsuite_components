# AUTO GENERATED FILE - DO NOT EDIT

export checktreepicker

"""
    checktreepicker(;kwargs...)

A CheckTreePicker component.

Keyword arguments:
- `id` (String; required): The ID used to identify this component in Dash callbacks.
- `appearance` (String; optional): The appearance of the component. Can be `default` or `subtle`.
- `block` (Bool; optional): Whether to take up the full width of the parent container.
- `cascade` (Bool; optional): Whether to enable cascade selection.
- `cleanable` (Bool; optional): Whether to display the clear button
- `countable` (Bool; optional): Whether to display the count of selected items
- `custom_locale` (Dict; optional): Custom locale for component
- `data` (Array; optional): The Tree Data
- `defaultExpandAll` (Bool; optional): Whether to expand all nodes by default
- `placement` (String; optional): The placement of the popup. Can be 'bottomStart', 'bottomEnd', 'topStart', 'topEnd'.
- `selected` (Array of Strings; optional): Selected value(s)
- `style` (Dict; optional): Custom styling of the component.
"""
function checktreepicker(; kwargs...)
        available_props = Symbol[:id, :appearance, :block, :cascade, :cleanable, :countable, :custom_locale, :data, :defaultExpandAll, :placement, :selected, :style]
        wild_props = Symbol[]
        return Component("checktreepicker", "CheckTreePicker", "dash_rsuite_components", available_props, wild_props; kwargs...)
end

