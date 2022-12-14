import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe("ProfileStatus component", () => {
    
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='STATUS'/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('STATUS')
    })

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status='STATUS'/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span).not.toBeNull()
    })

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status='STATUS'/>)
        const root = component.root
        expect(() => {
            root.findByType('input')
        }).toThrow()
    })

    test("<span> should be displayed with correct status", () => {
        const component = create(<ProfileStatus status='STATUS'/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span.children[0]).toBe('STATUS')
    })

    test("<input> should be displayed in editMode instead of <span>", () => {
        const component = create(<ProfileStatus status='STATUS'/>)
        const root = component.root
        const span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')
        expect(input.props.value).toBe('STATUS')

    })

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='STATUS' updateUserStatus={mockCallback} />)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})