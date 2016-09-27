require 'test_helper'

class MainControllerTest < ActionDispatch::IntegrationTest
  test "should get calculator" do
    get main_calculator_url
    assert_response :success
  end

end
